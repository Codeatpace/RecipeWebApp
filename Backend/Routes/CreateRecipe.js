const express = require('express')
const router = express.Router();
const recipes = require('../models/recipes')
router.post('/createrecp', async(req, res) => {
    try{    
        recipes.create({
            dishName: req.body.dname,
            ingredients : req.body.ingredients,
            steps: req.body.steps,
            imgSrc: req.body.imgSrc
        })
        // console.log("reipess")
        res.json({success:true})
    }
    catch(e){
        // console.log(e);
        res.json({success:false})
        res.send("Server Error", e.message)
    }
})
module.exports = router;