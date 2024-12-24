import React from "react"
import {useSearchParams} from "react-router-dom"

const paymentSuccess = () =>{
    const searchQuery = useSearchParams()[0]
    const payment_id = searchQuery.get("payment_id")
    return (
        <div className="payment">
            Payment is Successfully Complete
            <p>Reference No: {payment_id}</p>
        </div>
    )
}

export default paymentSuccess

