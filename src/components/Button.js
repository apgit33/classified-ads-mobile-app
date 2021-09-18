import React from "react";
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { AuthContext } from '../../src/config/config';

export const LogoutButton = () => {
    const { signOut } = React.useContext(AuthContext);
 
    return (
        <Button title="Sign out" onPress={signOut} />
    );
}