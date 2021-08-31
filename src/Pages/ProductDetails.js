import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductDetails } from "../services/api";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        console.log("its working")
        dispatch(getProductDetails(id));
    }, [])

    const details = useSelector((state => state.details));
    console.log(details);
    const data = details[0] ? Object.keys(details[0]) : [];


    return (
        <>
            <h1>Product details</h1>
            <div className='item-container'>

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
                        <Button variant="warning" style={{ color: "white" }}>Buy Now</Button><br />
                        <Button style={{
                            background: '#fb641b',
                            border: 'none', color: '#fff'
                        }} >Add to cart</Button>
                        <Link to='/'>Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;