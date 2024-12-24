import React from "react"


const Card =({product_id,amount,nam,img,text,checkOutHandler})=>{
    return(
        <div className="card">
            <img src={img} alt="img"/>
            <div className="container">
                <h4><b>{nam}</b></h4> 
                <p>{text}</p>
                <p>Rs{amount} <button onClick={()=>checkOutHandler(amount,product_id)}>Hire</button></p> 
                
            </div>
        </div>
    )
}

export default Card