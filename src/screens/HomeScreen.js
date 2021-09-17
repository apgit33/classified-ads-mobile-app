import * as React from 'react';
// import React, { useState } from 'react';

import { StyleSheet, View, TextInput, Text, FlatList, Button,TouchableOpacity } from 'react-native'
import { AuthContext } from '../config/config';
import * as SecureStore from 'expo-secure-store';
import { getAds } from '../api/route';
// import FilmItem from '../components/FilmItem'
import {CardItem} from '../components/CardItem'
// import { getUsers } from '../api/users';
// import { getUser } from '../api/user';
// import { getAds } from '../api/ads';
// import { setToken, getToken } from '../api/token';
// import { Search } from '../../Components/Search';
// import FilmItem from '../../Components/FilmItem'
// import { getFilmsFromApiWithSearchedText, getAdsFromApi } from '../../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js
// import { Card, ListItem, Button, Icon } from 'react-native-elements'

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

    const [ads, setAds] = React.useState('');
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await getAds();
        
            setAds(result.ads);
        };
     
        fetchData();
    }, []);
// console.log(ads);
    return (
        <View>
            
            <View >
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher une annonce"
                    value={search}
                    onChangeText={setSearch}
                    onSubmitEditing={() => test()}
                />
            </View>

            <View >
                <FlatList
                    data={ads}
                    keyExtractor={(item) => item.id.toString()}
                    // renderItem={({item}) => <FilmItem film={item} navigation={this.props.navigation}/>}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={() => navigation.navigate('Ad', {ad: item} )} >
                            <CardItem ad={item}/>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

function test() {
    console.log('call /search puis setAds');
    // setAds()
}