import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { Card } from 'react-native-elements'
import {Asset} from 'expo-asset';
import { get, post } from '../api/fetch';
import { FlatList } from 'react-native-gesture-handler';
import { AuthContext, LogoURI} from '../config/config';

export const Ad = ({ad}) => {
    // console.log("r");
// export CardItem extends React.Component {
    // render() {
        // const film = this.props.film.intervention
        // const { navigate } = this.props.navigation;
        // this.props.navigation.navigate('Test');
        // const image = Asset.fromModule(require(ad.picture)).uri
        // console.log(ad);
        // const image = get('/api'+ad.picture)
        console.log(LogoURI);
        return (
            <View >
                <Text>{ad.title}</Text>
                <Image
                    style={styles.logo}
                    source={{
                        uri: LogoURI
                    }}
                />
                <Text>{ad.price}</Text>
                <Text>{ad.city}</Text>
                <Text>{ad.created_at}</Text>
                <Text>{ad.title}</Text>
                <Text>{ad.title}</Text>
                <Text>{ad.description}</Text>
            </View>
        )
    }
// }

const styles = StyleSheet.create({
    logo: {
        // flex: 1,
        // resizeMode: 'contain',
        height: 98,
        width: 374,
        // left: ',
    },
    main_container: {
        // height: 190,
        // flexDirection: 'row'
    },
    // image: {
    //     width: 120,
    //     height: 180,
    //     margin: 5,
    //     backgroundColor: 'gray'
    // },
    content_container: {
        // flex: 1,
        // margin: 5
    },
    header_container: {
        // flex: 3,
        // flexDirection: 'row'
    },
    title_text: {
        // fontWeight: 'bold',
        // fontSize: 20,
        // flex: 1,
        // flexWrap: 'wrap',
        // paddingRight: 5
    },
    vote_text: {
        // fontWeight: 'bold',
        // fontSize: 26,
        // color: '#666666'
    },
    description_container: {
        // flex: 7
    },
    description_text: {
        // fontStyle: 'italic',
        // color: '#666666'
    },
    date_container: {
        // flex: 1
    },
    date_text: {
        // textAlign: 'right',
        // fontSize: 14
    }
})

// export default CardItem