import { signUpUser } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../services/api";
import { useHistory } from "react-router";

const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const register = useSelector(state => state.register);
    console.log(register);

    const onValueChange = (e) => {
        dispatch(signUpUser({ ...register, [e.target.name]: e.target.value }));
    }
    const addUserDetails = () => {
        dispatch(addUser(register));
        history.push('/signin')
    }

    return (
        <div>
            <h2 >SignUP Page</h2>
            <form>
                <div className="form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email"  name= "email"   aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text"  name= "name" placeholder="Enter Name" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div class="form-group">
                        <label>Number</label>
                        <input type="number"  name= "number" placeholder="enter your mobile number" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password"  name= "password" placeholder="Password" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div><br/>
                        <button type="submit" class="btn btn-primary" onClick={() => addUserDetails()}>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Signup