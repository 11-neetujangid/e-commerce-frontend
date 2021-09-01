import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getProductDetails,addCart  } from "../services/api";


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
    let itemcount = 0;
    const addToCart = (id) =>{
      
        console.log("i am in add to cart");
        console.log(id)
        dispatch(addCart(id));
        console.log(itemcount++)

    }
   
    const clickBuyNow = () =>{
        dispatch(addCart(id));
        history.push('/check')
    }

    return (
        <>
     
            <h1>Product details</h1>
            <div className='item-container'>
                    <div className='card'>
                        <tr>
                            <h3>{details.category}</h3>
                            <p> description:</p>
                            <p> {details.description}</p>
                            <img src={details.image} alt='img' />
                            <p> Price:{details.price}</p>
                            <p> Rating</p>
                            {/* <p> count: {details.rating.count} rate:{details.rating.rate}</p> */}
                            <p> {details.title}</p>

                        </tr>
                        <Button variant="warning" style={{ color: "white" }} 
                        onClick = {() => clickBuyNow()}
                        >Buy Now</Button><br />
                        <Button style={{
                            background: '#fb641b',
                            border: 'none', color: '#fff'
                        }} 
                        onClick = {() => addToCart(details.id)}
                        >Add to cart</Button>
                        <Link to='/'>Back</Link>
                    </div>
                </div>
        </>
    )
}
export default ProductDetails;