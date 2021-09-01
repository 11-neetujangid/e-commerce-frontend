export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SIGNUP_USERS = "SIGNUP_USERS";
export const SIGNIN_USERS = "SIGNIN_USERS";
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";
export const LIMIT = "LIMIT";


export const setProduct = (payload) => ({ type: SET_PRODUCTS, payload: payload });
export const signUpUser = (payload) => ({ type: SIGNUP_USERS, payload: payload });
export const signInUser = (payload) => ({ type: SIGNIN_USERS, payload: payload });
export const setProductDetails = (payload) => ( console.log(payload),{ type: SET_PRODUCT_DETAILS, payload: payload});
export const addToCart = (payload) => ( console.log(payload),{ type: ADD_TO_CART, payload: payload});
export const filters = (payload) => ( console.log(payload),{ type: LIMIT, payload: payload});
