import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { getProducts } from "../services/api";
import { limitFilter,sortFilter , categoryFilter} from "../services/api";
import { filters } from "../Actions/action";



const HomePage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
   
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const product = useSelector((state) => state.products);
    console.log(product);
    const search = useSelector((state) => state.search);
    console.log(search);
   
    const onClickProduct = (Id) => {
        history.push(`/details/${Id}`)
    }
    const onValueChange = (e) => {
        dispatch(filters({ [e.target.name]: e.target.value }));
    }
    const onClickSearch= () =>{
        dispatch(limitFilter(search));

    }
    const onClickSearch2= () =>{
        dispatch(sortFilter(search));

    }
    const onClickSearch3 = () =>{
        dispatch(categoryFilter(search));

    }
    return (
        <><br />
            <div className="search">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                    name = "search" onChange={(e) => onValueChange(e)} aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickSearch()} >limit</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickSearch2()} >sort</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickSearch3()} >category</button>

                </div>
            </div>

            <h1>All Products</h1>

            <div className='item-container'>
                {
                    product.map(record => (
                        <div className='card' key={record.id} >
                           
                                <h3>{record.category}</h3>
                                <div onClick={() => onClickProduct(record.id)}>
                                    <img src={record.image} alt='img' />
                                </div>
                                <p>{record.price}</p>
                                <p>{record.title}</p>
                                <p>rating: {record.rating.rate} {record.rating.count}</p>
                           
                        </div>

                    ))
                }
            </div>

        </>
    )
}
export default HomePage;