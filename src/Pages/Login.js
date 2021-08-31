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

    const loginUserDetails = () => {
        
        dispatch(loginUser(login))
        history.push('/');
    }
    return (
        <div>
            {/* <from>
                <h2>Login Page</h2>
                Email <input name="email" type="email" onChange={(e) => onchangeInput(e)} placeholder="Enter your email id" /><br></br>
                Password<input name="password" type="password" onChange={onchangeInput} placeholder="Enter your password" /><br></br>
                <Button variant="primary" onClick={() => editUserDetails()}>Login</Button>

            </from> */}
            <form>
                <div className="form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" name ="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => onchangeInput(e)} />
                    </div>
                    <div>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" name ="password" placeholder="Password" onChange={(e) => onchangeInput(e)} />
                    </div>

                    <div><br/>
                        <button type="submit" class="btn btn-primary" onClick={() => loginUserDetails()}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin;












