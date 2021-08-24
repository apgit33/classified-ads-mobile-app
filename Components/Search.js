import React from 'react'
import { StyleSheet, View, TextInput, Text, FlatList, Button } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText, getAdsFromApi } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js
// import { Button, Card } from 'galio-framework';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = { films: this._loadFilms() }
    }

    _loadFilms() {
        // getFilmsFromApiWithSearchedText("star").then(data => {
        //     this._films = data.results
        //     this.forceUpdate()
        // })
        getAdsFromApi().then(data => {
            this.setState({ films: data.ads })
        })
    }

    _searchTextInputChanged(text) {
        this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <Button style={styles.button} color='success' title='Rechercher' />
                {/* <Card
                    flex
                    // borderless
                    style={styles.card}
                    title="Christopher Moon"
                    caption="139 minutes ago"
                    location="Los Angeles, CA"
                    avatar="http://i.pravatar.cc/100?id=skater"
                    imageStyle={styles.cardImageRadius}
                    // imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                    image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                /> */}
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        // marginTop: 20
        justifyContent:'center',
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        flex: 1,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        backgroundColor: '#000000',
    }
})

export default Search