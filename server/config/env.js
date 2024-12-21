import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 4000
const razorpay_key_id = process.env.RAZORPAY_KEY_ID
const razorpay_secret_key = process.env.RAZORPAY_SECRET_KEY

export{
    port,
    razorpay_key_id,
    razorpay_secret_key
}