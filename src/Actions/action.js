export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SIGNUP_USERS = "SIGNUP_USERS";
export const SIGNIN_USERS = "SIGNIN_USERS";
export const SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";



export const setProduct = (payload) => ({ type: SET_PRODUCTS, payload: payload });
export const signUpUser = (payload) => ({ type: SIGNUP_USERS, payload: payload });
export const signInUser = (payload) => ({ type: SIGNIN_USERS, payload: payload });
export const setProductDetails = (payload) => ( console.log(payload),{ type: SET_PRODUCT_DETAILS, payload: payload});