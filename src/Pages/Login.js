import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../Actions/action";
import { loginUser } from "../services/api";


const Signin = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const login = useSelector((state => state.login));
    console.log(login);


    const onchangeInput = (e) => {
        dispatch(signInUser({ ...login, [e.target.name]: e.target.value }));
        console.log(login)

    }
    const loginUserDetails = (e) => {
        e.preventdefault();
        dispatch(loginUser(login))
        console.log("done")
        // history.push('/');
    }
    return (
        <div>
            <form>
                <div className ="form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className ="form-control" name ="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => onchangeInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className ="form-control" name ="password" placeholder="Password" onChange={(e) => onchangeInput(e)} />
                    </div>

                    <div><br/>
                        <button type="submit" className ="btn btn-primary" onClick={() => loginUserDetails()}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin;












