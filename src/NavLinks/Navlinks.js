import { Nav, Navbar } from "react-bootstrap";
import img from '../Pages/Images/cart.png';
import { useSelector } from "react-redux";

const NavLinks = () => {

    console.log()
    const token = useSelector((state) => state.token);
    return (
        <div>
            {!token ?
                (
                    <Navbar bg="dark" variant="dark">
                    <Nav className="me-auto" >
                        <Nav className="me-auto" ></Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/signup'>Sign Up</Nav.Link>
                        <Nav.Link href='/signin'>Sign In</Nav.Link>
                        <Nav.Link href='/check'>Checkout</Nav.Link>
                    </Nav>
                </Navbar>
                )


                : (
                    <Navbar bg="dark" variant="dark">
                        <Nav className="me-auto" >
                            <Nav className="me-auto" ></Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/signup'>Sign Up</Nav.Link>
                            <Nav.Link href='/check'>Checkout</Nav.Link>
                            <Nav.Link href='/logout'>Logout</Nav.Link>
                        </Nav>
                    </Navbar>
                )

        /* : (
                    <Navbar bg="dark" variant="dark">
                        <Nav className="me-auto" >
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/check'>Checkout</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="cart-icon img">
                                <span style={{ color: 'white' }}>Cart</span>
                                <img src={img} />
                            </div>
                        </Nav>
                    </Navbar>

                )
               */}
        </div>
    )
}
export default NavLinks