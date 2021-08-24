const API_TOKEN = "VOTRE_TOKEN_ICI";
const API_URL = 'http://10.0.2.2:8989/api';

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getAdsFromApi () {
    const url = API_URL + '/ads'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}