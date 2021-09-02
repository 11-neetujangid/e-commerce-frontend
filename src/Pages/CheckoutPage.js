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
                        <div className='card' key={record.id} >
                           
                                <h3>{record.category}</h3>
                                <div>
                                    <img src={record.image} alt='img' />
                                </div>
                                <p>{record.price}</p>
                                <p>{record.title}</p>
                               
                           
                        </div>

                    ))
                }
            </div>

        </>
    )
}
export default CheckoutPage