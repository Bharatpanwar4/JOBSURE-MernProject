import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from 'dotenv'
import connectDB from "./db/connect.js";
dotenv.config()
const app = express()
const port = process.env.PORT || 5000;


//middleware

app.get('/',(req,res)=>{
    res.send(`<h1>hello bharat</h1>`)
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const startDB = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
    await console.log('db connected')
    
app.listen(port,()=>{console.log(`server is listening on port ${port}`)})

    } catch (error) {
        console.log(error);
    }
}
startDB()