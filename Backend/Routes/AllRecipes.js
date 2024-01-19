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


module.exports = router;