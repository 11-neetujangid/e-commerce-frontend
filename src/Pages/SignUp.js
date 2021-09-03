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
        history.push('/signin');
    }

    return (
        <div>
            <h2 >SignUP Page</h2>
            <form>
                <div className="form">

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Number</label>
                        <input type="phone" name="number" className="form-control" placeholder="enter your mobile number" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="address" name="address" className="form-control" placeholder="enter your address" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e) => onValueChange(e)} />
                    </div>
                    <div><br />
                        <button type="submit" className="btn btn-primary" onClick={() => addUserDetails()}>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Signup