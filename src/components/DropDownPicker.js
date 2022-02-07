import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { Card } from 'react-native-elements'
import { Asset } from 'expo-asset';
import { get, post } from '../api/fetch';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from "react-native-custom-dropdown";

export const DropDownPicker = ({ data, multiple, multipleText }) => {
    if (multiple) {
        return (
            <DropDownPicker
                items={data}
                defaultValue={this.state.country}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />
        )
    }
    return (
        <DropDownPicker
            items={data}
            multiple={true}
            multipleText="%d items have been selected."
            min={0}
            max={10}
            defaultValue='uk'
            containerStyle={{
                height: 50,
                width: '50%',

            }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            onChangeItem={item => setSelectedTeams(item)}
        />
    )
}