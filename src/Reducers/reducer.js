import { SET_PRODUCTS, SIGNUP_USERS, SIGNIN_USERS, SET_PRODUCT_DETAILS} from "../Actions/action"


const initialState = {
    products: [],
    register: {
        name: '',
        email: '',
        number: '',
        password: '',
    },
    login:{
        email:'',
        password:''
    },
    details:[],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PRODUCTS:
            console.log(action.payload);
            return {
                ...state,
                products: action.payload,
            }
        case SIGNUP_USERS:
            console.log('register');
            console.log(action.payload)
            return {
                ...state,
                register: action.payload,
            }
            case SIGNIN_USERS:
            console.log("signin data", action.payload);
            return {
                ...state,
                login: action.payload,
            }
            case SET_PRODUCT_DETAILS:
                console.log(action.payload);
                console.log("helllo world");

                return {
                    ...state,
                    details: action.payload,
    
                }
        default:
            return state;

    }
}
export default reducer;