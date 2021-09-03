import { useSelector } from "react-redux"

const CheckoutPage = () => {

    
    const buy = useSelector((state => state.buy));
    console.log(buy);

    return (
        <>
            <h2> item details</h2>
            <div className='item-container'>
                {
                    buy.map(record => (

                        <div className='card' >
                            <h3>{record.date}</h3>
                            <p>{record.id}</p>
                            <p>productId: {record.products[0].productId}</p>
                            <p>quantity: {record.products[0].quantity}</p>
                            <p>userId: {record.userId}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default CheckoutPage;