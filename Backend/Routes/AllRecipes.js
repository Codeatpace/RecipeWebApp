const express = require('express');
const router = express.Router()
const Recipes = require('../models/recipes')

router.get('/allRecipes', async(req, res) => {
    try {
       let allRecipes = await Recipes.find({})
        res.send([allRecipes])
    } catch (error) {
        res.send("Server Error", error.message)
    }
}) 
router.get('/recipe/:id', async(req, res) => {
    let id = req.params.id
    try{ 
        let val = await Recipes.findById(id)
        if(val){
            res.json(val)
        }
        else{
            res.status(400).json({message:"Recipe not found"})
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;