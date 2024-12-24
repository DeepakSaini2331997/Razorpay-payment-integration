import Razorpay from "razorpay"
import crypto from "crypto"
import {razorpay_key_id,razorpay_secret_key} from "../config/env.js"

const createOrder = (req,res) =>{
    const {product_id,amount,customer_id} = req.body
    const instance = new Razorpay({ key_id: razorpay_key_id, key_secret: razorpay_secret_key })

    const options = {
        amount: Number(amount*100), 
        currency: "INR",
        receipt: "order_rcptid_"+product_id
    };

    try{
        instance.orders.create(options, function(err, order) {
            if(err){
                res.status(400).json({
                    success:false,
                    msg:"Error while create order "+err.message
                })
            }

            res.status(200).json({
                success:true,
                order
            })
        });
    }catch(err){
        res.status(400).json({
            success:false,
            msg:"Error while create order "+err.message
        })
    }
}

const verifyPayment =(req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body

    const generatedSignature = crypto.createHmac("SHA256", razorpay_secret_key).update(razorpay_order_id + "|" + razorpay_payment_id).digest("hex");  
    
    const isSignatureValid = generatedSignature == razorpay_signature;
    if(isSignatureValid){
        // res.status(200).json({
        //     success:true,
        //     msg:'payment Success',
        //     payment_id:razorpay_payment_id
        // })
        res.redirect("http://localhost:3000/payment-success?payment_id="+razorpay_payment_id)
    }else{
        // res.status(400).json({
        //     success:false,
        //     msg:'payment Failed'
        // })
        res.redirect("http://localhost:3000/payment-fail")
    }
}

const getRazorpayKey = (req,res) =>{
    res.status(200).json({
        success:true,
        key:razorpay_key_id
    })
}

export{
    createOrder,
    verifyPayment,
    getRazorpayKey
}