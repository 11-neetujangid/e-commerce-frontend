import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { getProducts } from "../services/api";


const HomePage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
 
    useEffect(() => {
        dispatch(getProducts());
    }, []);


    const product = useSelector((state) => state.products);
    console.log(product);

    const onClickProduct = (Id) => {
        history.push(`/details/${Id}`)
    }
    return (
        <>
            <h1>All Products</h1>

            <div className='item-container'>
                {
                    product.map(record => (
                        <div className='card' key={record.id} >
                            <tr key={record.id}>
                                <h3>{record.category}</h3>
                                <div onClick={() => onClickProduct(record.id)}>
                                    <img src={record.image} alt='img' />
                                </div>
                                <p>{record.price}</p>
                                <p>{record.title}</p>
                                <p>rating: {record.rating.rate} {record.rating.count}</p>
                            </tr>
                        </div>

                    ))
                }
            </div>

        </>
    )
}
export default HomePage;