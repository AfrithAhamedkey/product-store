import express from "express";
 const router =express.Router();

import {createproduct, 
    deleteproduct ,  
    getproductbyid,
    getproducts,
    updateProduct} from '../controller/product.controller.js';

    router.post('/product',createproduct);
    router.delete('/product/:id',deleteproduct);
    router.get('/product',getproducts);
    router.get('/product/:id',getproductbyid);
    router.put('/product/:id',updateProduct)

    export default  router;
