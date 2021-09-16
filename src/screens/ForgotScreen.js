import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext, LogoURI} from '../config/config';
import { post, get } from '../api/fetch';

export const ForgotScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);
// console.log(LogoURI);
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
                {/* <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                /> */}
                {/* <Button title="Sign in" onPress={() => forgotEmail({ email })} /> */}
                <Button 
                    title="Valider"
                    color="#ED5940"
                    onPress={() => {
                        const token = get('/');
                    }} 
                />

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                    <Text>Pas de compte ? <Text style={styles.link}>inscrit toi</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                    <Text>Déjà un compte ? <Text style={styles.link}>connecte toi</Text></Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

function ForgotEmail() {
    const { signIn } = React.useContext(AuthContext);
 
    return (
        // <Button title="Sign out" onPress={signIn} />
        <Button title="Sign out"/>
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
    link: {
        color: '#ED5940',
    }
})