import { API_URL, API_PREFIX } from '../../.env';
import * as SecureStore from 'expo-secure-store';

// import { getToken } from './token';
// import { dispatch } from '../../App';

export const getHeadersF = async () => {
    const token = await SecureStore.getItemAsync('userToken');

    const headers = {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data;boundary=uu',
        // 'enctype':"multipart/form-data"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
};
export const getHeaders = async () => {
    const token = await SecureStore.getItemAsync('userToken');

    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'enctype':"multipart/form-data"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
};

export const post = async (destination, body) => {
    console.log(API_URL+destination);

    const headers = await getHeaders();
// console.log(JSON.stringify(body));
    const result = await fetch(`${API_URL}${destination}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });
// console.log(result);
    if (result.ok) {
        return result.json();
    }
    throw { error: result.status };
};

export const postFormData = async (destination, body) => {
    console.log(API_URL+destination);

    const headers = await getHeadersF();
// console.log(JSON.stringify(body));
    const result = await fetch(`${API_URL}${destination}`, {
        method: 'POST',
        headers,
        body: body,
    });
// console.log(result);
    if (result.ok) {
        return result.json();
    }
    throw { error: result.status };
};

export const get = async (destination) => {
    const headers = await getHeaders();
    console.log(API_URL+destination);

    const result = await fetch(`${API_URL}${destination}`, {
        method: 'GET',
        headers,
    })

    if (result.ok) {
        // console.log(await result.json());
        // console.log(result);
        return result.json();
        // .then(data => {
        //     console.log(data);
        // })
    }

    throw { error: result.status , url : result.url};
};

export const put = async (destination, body) => {
    const headers = await getHeaders();

    const result = await fetch(`${API_URL}${destination}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
    });

    console.log(result);

    if (result.ok) {
        return result.json();
    }
    throw { error: result.status };
};