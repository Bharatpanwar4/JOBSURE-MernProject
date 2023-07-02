

const errorHandlerMiddleware=(err,req,res,next)=>{
    console.log(err);
    res.status(500).json({msg:'there wasa an error'})
}

export default errorHandlerMiddleware