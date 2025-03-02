import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productroute from "./routes/product.route.js"

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api',productroute)


app.get('/api/home',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.listen(PORT,()=>{
    connectDB();
    console.log("server is running in http://localhost:"+PORT)
   

})

