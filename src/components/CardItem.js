import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { Card } from 'react-native-elements'
import { Asset } from 'expo-asset';
import { get, post } from '../api/fetch';
import { FlatList } from 'react-native-gesture-handler';

export const CardItem = ({ ad }) => {
    // console.log("r");
    // export CardItem extends React.Component {
    // render() {
    // const film = this.props.film.intervention
    // const { navigate } = this.props.navigation;
    // this.props.navigation.navigate('Test');
    // const image = Asset.fromModule(require(ad.picture)).uri
    // const image = get('/api'+ad.picture)
    const tetss = Asset.fromModule('/api'+ad.picture).uri; // le logo
    // console.log(tetss);
    return (
        // <View style={styles.main_container}>
        //     <View style={styles.content_container}>
        //         <View style={styles.header_container}>
        //             <Text style={styles.vote_text}>{ad.title}</Text>
        //             <Text style={styles.vote_text}>ee</Text>
        //         </View>
        //         {/* {test ? (
        //             <Text style={styles.vote_text}>{ad.name}</Text>
        //             ) : (
        //             <Text style={styles.vote_text}>dd</Text>
        //             )} */}
        //         <View style={styles.description_container}>
        //             {/* <Text style={styles.description_text} numberOfLines={6}>{ad.comments}</Text> */}
        //             {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
        //         </View> 
        //         <View style={styles.date_container}>
        //             {/* <Text style={styles.date_text}>Sorti le {ad.intervention_at}</Text> */}
        //         </View>
        //     </View>
        // </View>
        <Card>
            <Card.Title>{ad.title}</Card.Title>
            <Card.Divider />
            <Image
                style={styles.logo}
                source={{
                    uri: tetss
                }}
            />
            {/* <Card.Image source={require(ad.picture)} /> */}
            {/* <Card.Image >  */}
            {/* <Card.Image source={{ uri: ad.picture }}>  */}
            <Card.Image source={require('../../assets/logo.png')} />
            {/* <Card.Image source={{ uri: image }}>  */}

            <Text style={{ marginBottom: 10 }}>
                Prix : {ad.price} €
            </Text>
            <FlatList
                data={ad.categories}
                keyExtractor={(item) => item.id.toString()}
                // renderItem={({item}) => <FilmItem film={item} navigation={this.props.navigation}/>}
                renderItem={({ item }) => <Text> {item.name} </Text>}
                horizontal={true}
            />
            <Text style={{ marginBottom: 10 }}>
                {ad.city}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                {ad.created_at}
            </Text>
        </Card>
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
