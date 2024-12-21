import express from "express"
import cors from "cors"
import {port}  from "./config/env.js"
import { router } from "./routes/paymentRoute.js"
import { errorHandler } from "./middleware/errorHandler.js"
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)
app.use('/api',router)

app.listen(port,()=>{
    console.log("Connect Scuuessfully on port:"+port)
})
