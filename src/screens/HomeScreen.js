import * as React from 'react';
// import React, { useState } from 'react';

import { StyleSheet, View, TextInput, Text, FlatList, Button,TouchableOpacity } from 'react-native'
import { AuthContext } from '../config/config';
import * as SecureStore from 'expo-secure-store';
import { getInterventions } from '../api/user';
import FilmItem from './FilmItem'

// import { getUsers } from '../api/users';
// import { getUser } from '../api/user';
// import { getAds } from '../api/ads';
// import { setToken, getToken } from '../api/token';
// import { Search } from '../../Components/Search';
// import FilmItem from '../../Components/FilmItem'
// import { getFilmsFromApiWithSearchedText, getAdsFromApi } from '../../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js

export const getToken = async () => {
    try {
        const value = await SecureStore.getItemAsync('userToken');

        if (value !== null) {
            return value;
        }
    } catch (e) {
        return null;
    }
};



export const HomeScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);

    const [interventions, setInterventions] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
          const result = await getInterventions();
     
          setInterventions(result.data);
        };
     
        fetchData();
    }, []);
// console.log(interventions);
    return (
        <View>
            
            <View >
                <Text>Interventions prévues</Text>
            </View>

            <View >
                <FlatList
                    data={interventions}
                    keyExtractor={(item) => item.intervention.id.toString()}
                    // renderItem={({item}) => <FilmItem film={item} navigation={this.props.navigation}/>}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={() => navigation.navigate('Test', {intervention: item} )} >
                            <Text>{item.intervention.name}</Text>
                            <Text>{item.intervention.intervention_at}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    );
};