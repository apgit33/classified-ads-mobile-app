import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { post, get } from '../api/fetch';
import { AuthContext, LogoURI} from '../config/config';

export const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [confirmpassword, setConfirmpassword] = React.useState('');
    const { signIn } = React.useContext(AuthContext);

    return (
        <View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: LogoURI
                    }}
                />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirm password"
                    value={confirmpassword}
                    onChangeText={setConfirmpassword}
                    secureTextEntry
                />
                <Button 
                    title="S'inscrire" 
                    onPress={() =>
                        post('/api/users', {
                            name: name,
                            email: email,
                            password: password,
                            password_confirmation: confirmpassword,
                        })
                            .then(() => {
                                signIn({ email, password })
                            })
                    }
                />

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                    <Text>Déjà un compte ? <Text style={styles.link}>connecte toi</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        // flex: 1,
        marginTop: 80,
        flexDirection: 'row',
        // backgroundColor: '#022436',
        justifyContent: 'center',
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // elevation: 2,
        // position: 'relative'
    },
    logo: {
        // flex: 1,
        // resizeMode: 'contain',
        height: 98,
        width: 374,
        // left: ',
    }, 
})