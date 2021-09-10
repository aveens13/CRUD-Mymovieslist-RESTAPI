import express from 'express';
const router = express.Router();

import products from './api.js';

router.get('/',(req,res)=>{
    res.send(products);
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const productQuery = products.find((product)=>product.id == id);
    res.send(productQuery);
})

router.get('/api/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query;
    
    let spreadProducts = [...products]
    if(search){
        spreadProducts = spreadProducts.filter((result)=>result.category.startsWith(search));
    }
    if(limit){
        spreadProducts = spreadProducts.slice(0,Number(limit));
    }
    res.json(spreadProducts);
})
router.post('/',(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.send(`New Product with title ${newProduct.title} under category ${newProduct.category} has been created.`);
})

export default router;