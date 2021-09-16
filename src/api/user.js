import { get, post } from './fetch';

export const getUsers = () => {
    // return get('/product/entry');
    return get('/products/product');
};

export const getInterventions = () => {
    // return get('/product/entry');
    return get('/orders/intervention');
};
