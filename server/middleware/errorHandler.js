export const errorHandler = (err,req,res,next)=>{
    res.status(400).json({
        succes:false,
        msg:"Internal server error"+err.message
    })
    next()
}