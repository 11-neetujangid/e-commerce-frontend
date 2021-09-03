import axios from 'axios';
import { setProduct, signUpUser, setProductDetails, addToCart, signIn, BuyProduct } from '../Actions/action';

const url = 'https://fakestoreapi.com/products';
const userUrl = 'https://fakestoreapi.com/users';
const login = 'https://fakestoreapi.com/auth/login';
const cartUrl = 'https://fakestoreapi.com/carts';


export const getProducts = () => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${url}`);
        console.log(response.data)
        dispatch(setProduct(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const addUser = (user) => async (dispatch, getState) => {
    console.log(user);
    try {
        const response = await axios.post(`${userUrl}`, user);
        console.log(response.data);
        dispatch(signUpUser(response.data));

    } catch (err) {
        console.log(err);
    }

}
//signin users-->
export const loginUser = (user) => async (dispatch, getState) => {
    console.log(user)

    try {

        const response = await axios.post(`${login}`, user);
        console.log(response.data);
        dispatch(signIn(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const getProductDetails = (Id) => async (dispatch, getState) => {
    console.log(`/${url}/${Id}`)
    try {
        const response = await axios.get(`${url}/${Id}`);
        console.log(response)
        dispatch(setProductDetails(response.data));
    } catch (err) {
        console.log(err);
    }
}

export const addCart = (id) => async (dispatch, getState) => {
    console.log(id)
    try {
        const response = await axios.post(`${cartUrl}`, id);
        console.log(response.data)
        dispatch(addToCart(response.data));
    } catch (error) {
        console.log(error);
    }

}
export const buyNow = () => async (dispatch, getState) => {
    console.log()
    try {
        const response = await axios.get(`${cartUrl}`);
        console.log(response.data)
        dispatch(BuyProduct(response.data));
    } catch (error) {
        console.log(error);
    }

}
export const limitFilter = (limit) => async (dispatch, getState) => {
    console.log(`${url}?limit=${limit}`)
    try {
        const response = await axios.get(`${url}?limit=${limit}`);
        console.log(response.data)
        dispatch(setProduct(response.data));
    } catch (error) {
        console.log(error);
    }

}
export const sortFilter = (sort) => async (dispatch, getState) => {
    console.log(`${url}?sort=${sort}`)
    try {
        const response = await axios.get(`${url}?sort=${sort}`);
        console.log(response.data)
        dispatch(setProduct(response.data));
    } catch (error) {
        console.log(error);
    }

}
export const categoryFilter = (category) => async (dispatch, getState) => {
    console.log(`${url}/category/${category}`)
    try {
        const response = await axios.get(`${url}/category/${category}`);
        console.log(response.data)
        dispatch(setProduct(response.data));
    } catch (error) {
        console.log(error);
    }

}
