import { useSelector } from "react-redux"

const CheckoutPage =() =>{

    const add= useSelector((state => state.add));
    console.log(add);
    return(
        <>
        <h2> item details</h2>
        
        </>
    )
}
export default CheckoutPage