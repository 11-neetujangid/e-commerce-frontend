import { Nav, Navbar } from "react-bootstrap";
import img from '../Pages/Images/cart.png';

const NavLinks = () => {
  
console.log()
    // const token = useSelector((state) => state.token);
    return (
        <div>
            {/* {!token ?
                (
                    <Navbar bg="dark" variant="dark">
                        <Nav className="me-auto" >
                            <Nav className="me-auto" ></Nav>
                            <Nav.Link href='/'>Sign Up</Nav.Link>
                            <Nav.Link href='/signin'>Signin In</Nav.Link>
                        </Nav>
                    </Navbar>
                )
                : ( */}
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto" >
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/signup'>Sign Up</Nav.Link>
                    <Nav.Link href='/check'>Checkout</Nav.Link>
                </Nav>
                <Nav>
                    <div className = "cart-icon img">
                     <span style ={{color: 'white'}}>Cart</span>
                     <img src={img}/>
                    </div>
                </Nav>
            </Navbar>


        </div>
    )
}
export default NavLinks