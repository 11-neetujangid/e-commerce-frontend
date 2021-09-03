import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getProductDetails, addCart, buyNow } from "../services/api";


const ProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        console.log("its working")
        dispatch(getProductDetails(id));
    }, [])

    const details = useSelector((state => state.details));
    console.log(details);
    const token = useSelector((state => state.token));
    console.log(token);


    const addToCart = (details) => {
        console.log(details)
        if (!token) {
            history.push('/signin');
        } else {
            console.log("i am in add to cart");
            dispatch(addCart(details));
        }
    }
    const clickBuyNow = () => {
        // dispatch(addCart(details.id));
        dispatch(buyNow(details.id));

        history.push('/check')
    }

    return (
        <>
            <h1>Product details</h1>
            <div className='item-container'>
                <div className='card'>

                    <h3>{details.category}</h3>
                    <p> description:</p>
                    <p> {details.description}</p>
                    <div>
                        <img src={details.image} alt='img' />
                    </div>
                    <p> Price:{details.price}</p>
                    <p> Rating</p>

                    <p> {details.title}</p>


                    <Button variant="warning" style={{ color: "white" }}
                        onClick={() => clickBuyNow()}
                    >Buy Now</Button><br />
                    <Button style={{
                        background: '#fb641b',
                        border: 'none', color: '#fff'
                    }}
                        onClick={() => addToCart(details.id)}
                    >Add to cart</Button>
                    <Link to='/'>Back</Link>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;