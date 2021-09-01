import { SET_PRODUCTS, SIGNUP_USERS, SIGNIN_USERS, SET_PRODUCT_DETAILS, ADD_TO_CART, LIMIT} from "../Actions/action"


const initialState = {
    products: [],
    register: {
        name: '',
        email: '',
        number: '',
        address:'',
        password: '',
    },
    login:{
        email:'',
        password:''
    },
    details:[],
    add:[],
    serach:''
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
                case ADD_TO_CART:
                    console.log(action.payload);
                    console.log("add to cart");
    
                    return {
                        ...state,
                        add: action.payload,
        
                    }
                    case LIMIT:
                        console.log(action.payload);
                        console.log("limit");
        
                        return {
                            ...state,
                            search: action.payload.search,
            
                        }
                
        default:
            return state;

    }
}
export default reducer;