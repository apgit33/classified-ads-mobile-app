import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/mock';
import EmailForm from '../forms/EmailForm';

const CreateAccountScreen = ({ navigation }) => {
    return (
        <EmailForm
        buttonText="Sign up"
        onSubmit={createAccount}
        onAuthentication={() => navigation.navigate('Home')}
        >
            <Button
                title="Back to log in"
                onPress={() => navigation.navigate('Login')}
            />
        </EmailForm>
    );
};
  
  export default CreateAccountScreen;