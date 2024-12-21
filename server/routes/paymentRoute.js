import express from "express"
import { createOrder, getRazorpayKey, verifyPayment } from "../controllers/paymentController.js"
const router = express.Router()

router.get("/get-secret-key",getRazorpayKey)
router.post("/create-order",createOrder)
router.post("/verify-payment",verifyPayment)

export{
    router
}