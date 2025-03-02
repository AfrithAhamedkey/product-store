import express from "express";
 const router =express.Router();

import {createproduct, 
    deleteproduct ,  
    getproductbyid,
    getproducts} from '../controller/product.controller.js';

    router.post('/product',createproduct);
    router.delete('/product/:id',deleteproduct);
    router.get('/product',getproducts);
    router.get('/product/:id',getproductbyid)

    export default  router;
