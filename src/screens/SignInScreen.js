import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext, LogoURI} from '../config/config';
// import { Form, TextInput } from 'react-native-autofocus';

export const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ref_input2 = React.useRef();
    const ref_input3 = React.useRef();
    const { signIn } = React.useContext(AuthContext);
// console.log(LogoURI);

const onFocusHandler = () => {
    ref_input3.current && ref_input3.current.focus();
   }
   React.useEffect(() => {
       onFocusHandler();
   }, []);
    return (
        <>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: LogoURI
                    }}
                />
            </View>
            <View style={styles.formContainer}>
                {/* <Form> */}
                    <TextInput
                        autoFocus={true}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType="next"
                        onSubmitEditing={() => ref_input2.current.focus()}
                        // ref={ref_input3}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        onSubmitEditing={() => signIn({ email, password })}
                        // ref={ref_input2}
                    />
                {/* </Form> */}
                <Button title="Sign in" onPress={() => signIn({ email, password })} />

                <TouchableOpacity onPress={() => navigation.navigate('Forgot')} >
                    <Text>mot de passe oublié ?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                    <Text>Pas de compte ? inscrit toi</Text>
                </TouchableOpacity>

            </View>
        </>
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