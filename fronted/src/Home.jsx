import React from "react"
import Card from "./Card"
import axios from "axios"

const checkOutHandler = async(amount,product_id)=>{
    const { data } = await axios.get("http://localhost:4000/api/get-secret-key")

    const { data:{order} } = await axios.post("http://localhost:4000/api/create-order",{
        product_id,
        amount,
        customer_id:'111'
    })
  
    //console.log(data," my order record")

    const options = {
        "key": data.key, 
        "amount": order.amount, 
        "currency": "INR",
        "name": "Deepak Test",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order.id,
        "callback_url": "http://localhost:4000/api/verify-payment",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open()

}

const Home = ()=>{
    return(
        <div>
        <Card product_id={123}amount={5000} text={"Hire Male Architect & Engineer"} nam={"Laptop"} img={"https://www.w3schools.com/howto/img_avatar.png"} checkOutHandler={checkOutHandler}/>
        <Card product_id={523} amount={6000} text={"Hire FeMale Architect & Engineer"} nam={"Mobile"} img={"https://www.w3schools.com/howto/img_avatar2.png"} checkOutHandler={checkOutHandler}/>
        </div> 
    )
}

export default Home
