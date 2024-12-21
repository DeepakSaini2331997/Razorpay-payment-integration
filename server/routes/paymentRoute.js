import express from "express"
import { createOrder, getRazorpayKey, verifyPayment } from "../controllers/paymentController.js"
const router = express.Router()

router.post("/get-secret-key",getRazorpayKey)
router.get("/create-order",createOrder)
router.post("/verify-payment",verifyPayment)

export{
    router
}