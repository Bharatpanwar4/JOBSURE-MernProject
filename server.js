import express from "express";
import 'express-async-errors'
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from 'dotenv'
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"
dotenv.config()
const app = express()
const port = process.env.PORT || 5000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({msg:'welcome bharat'})
})
app.get('/api',(req,res)=>{
    res.json({msg:'welcome   aa bharat'})
})

//routers
app.use('/api/auth',authRouter)
app.use('/api/jobs',jobsRouter)



//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const startDB = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
    console.log('db connected')
    app.listen(port,()=>{console.log(`server is listening on port ${port}`)})

    } catch (error) {
        console.log(error);
    }
}
startDB()