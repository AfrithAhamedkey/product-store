import express from "express"

import Product from "../models/product.model.js";


//create user 
export const createproduct = async(req,res)=>{
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

}

//delete user 
export const deleteproduct = async (req,res)=>{
    const {id} = req.params;
  try{
   await Product.findByIdAndDelete(id);
    res.status(201).json({message:"Product deleted"})
  }catch(err){
    res.status(404).json({message:"Product not found"})
    
  }
}

//get All products

export const getproducts = async (req,res)=>{
    
    try{
        const products = await Product.find({})
        res.status(200).json({success:true , data:products})

    }catch(err){
        res.status(500).status({message:"Server Error"})
    }
}

// get product by id

export const getproductbyid =  async (req,res)=>{
    try{
    const oneproduct = await Product.findById(req.params.id)
    if(!oneproduct){
        res.status(400).json({message:"Product not found"})
    }
    res.status(200).json(oneproduct)
    }catch(err){
        res.status(500).json({message:err.message})

    }
}