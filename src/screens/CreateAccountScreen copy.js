import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/mock';

const CreateAccountScreen = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const createUser = () => {
        setErrorMessage('');

        createAccount('test@test.ca', 'password')
            .then((val) => {
                navigation.navigate('Home');
            })
            .catch((err) => setErrorMessage(err.message));
    };
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>CreateAccount</Text>

            <Button title="Create user" onPress={createUser} />

            <Button title="Log in" onPress={() => navigation.navigate('Login')} />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

        </View>
    );
  };
  
  export default CreateAccountScreen;