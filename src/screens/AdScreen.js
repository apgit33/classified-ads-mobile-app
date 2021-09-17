import * as React from 'react';
// import React, { useState } from 'react';

import { StyleSheet, View, TextInput, Text, FlatList, Button,TouchableOpacity } from 'react-native'
import { AuthContext } from '../config/config';
import * as SecureStore from 'expo-secure-store';
import { getAds } from '../api/route';
// import FilmItem from '../components/FilmItem'
import {CardItem} from '../components/CardItem'
import { Ad } from '../components/Ad';
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



export const AdScreen = ({ route }) => {
    const { ad } = route.params;

    return (
        <Ad ad={ad}/>
    );
};