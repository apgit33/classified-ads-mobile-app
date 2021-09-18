import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { post, get } from '../api/fetch';
import { AuthContext, LogoURI} from '../config/config';

export const PublishScreen = ({ navigation }) => {
    const [search, setSearch] = React.useState('');
    const { signIn } = React.useContext(AuthContext);

    return (
        <View>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="PublishScreenPublishScreenPublishScreen"
                    value={search}
                    onChangeText={setSearch}
                />
                <Button 
                    title="Valider" 
                    onPress={() => 
                        console.log("PublishScreen")
                        //setFilter, navigate Home
                    }
                />
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