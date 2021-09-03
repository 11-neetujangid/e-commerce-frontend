import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../Actions/action";
import { loginUser } from "../services/api";


const Signin = () => {
  
    const dispatch = useDispatch()

    const login = useSelector((state => state.login));
    console.log(login);

    const onchangeInput = (e) => {
        dispatch(signInUser({ ...login, [e.target.name]: e.target.value }));
        console.log(login)

    }
    const loginUserDetails = (e) => {

        if (login.email === '' || login.password === '') {
            alert("fields are required");
        } else {
            dispatch(loginUser(login))
            console.log("done");
        }

    }
    return (
        <div>
            <form onSubmit={() => loginUserDetails()}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="exampleInput1">Email address</label>
                        <input type="text" className="form-control" name="username" aria-describedby="usernameHelp" placeholder="Enter username" onChange={(e) => onchangeInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => onchangeInput(e)} />
                    </div>

                </div>

            </form>
            <button type="submit" className="btn btn-primary" onClick={() => loginUserDetails()}>Submit</button>

        </div>
    )
}

export default Signin;












