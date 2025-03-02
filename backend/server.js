import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config()

const app = express();

app.use(express.json());



app.post('/api/product',(req,res)=>{
    const product = req.body;
    if(!product.name||!product.price){
        res.status(400).json({message:"please check all fileds"})
    }

    const newproduct = new Product(product)

    try{
        newproduct.save();
        res.status(201).json({data:newproduct})
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"Server Error"})
    }

})

app.delete('/api/product/:id',async (req,res)=>{
    const {id} = req.params;
  try{
   await Product.findByIdAndDelete(id);
    res.status(201).json({message:"Product deleted"})
  }catch(err){
    res.status(404).json({message:"Product not found"})
    
  }
})

app.get('/api/product',async (req,res)=>{
    
    try{
        const products = await Product.find({})
        res.status(200).json({success:true , data:products})

    }catch(err){
        res.status(500).status({message:"Server Error"})
    }
})

app.get('/api/product/:id', async (req,res)=>{
    try{
    const oneproduct = await Product.findById(req.params.id)
    if(!oneproduct){
        res.status(400).json({message:"Product not found"})
    }
    res.status(200).json(oneproduct)
    }catch(err){
        res.status(500).json({message:err.message})

    }
})

app.get('/api/home',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.listen(5000,()=>{
    connectDB();
    console.log("server is running in http://localhost:5000")
   

})

