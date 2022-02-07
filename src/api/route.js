import { get, post } from './fetch';

// export const getUsers = () => {
//     // return get('/product/entry');
//     return get('/products/product');
// };

// export const getInterventions = () => {
//     // return get('/product/entry');
//     return get('/orders/intervention');
// };

export const getAds = (search) => {
    if (search) {
        return get('/api/ads?search='+search);
    }
    return get('/api/ads');
};

export const postAd = (data) => {
    return post('/api/ads', data);
}

export const getCategories = () => {
    return get('/api/ads/categories');
};