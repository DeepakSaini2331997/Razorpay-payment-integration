import React from "react"

const paymentFail = () =>{
    const searchQuery = useSearchParams()[0]
    const payment_id = searchQuery.get("payment_id")
    return (
        <div className="payment">
            Payment is  Not Completed
        </div>
    )
}

export default paymentFail

