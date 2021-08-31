import axios from 'axios';
import { setProduct, signUpUser, setProductDetails } from '../Actions/action';

const url = 'https://fakestoreapi.com/products';
const userUrl = "http://localhost:7002/users";

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
        const response = await axios.post(`${userUrl}/add`, user);
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
        const response = await axios.post(`${userUrl}/signin`, user);
        console.log(response.data);
        // dispatch(SignIn(response.data));

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