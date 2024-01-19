const express = require('express');
const router = express.Router()
const Recipes = require('../models/recipes')

router.post('/delRecipes', async(req, res) => {
    try {
        let dishName = req.body.dishName
        if(!dishName){
            return res.status(400).json({error: 'dishname require'})

        }
        const result = await Recipes.deleteMany({ dishName: dishName });
        console.log(result);
        res.status(200).json({ message: 'Deleted successfully' });

    } catch (error) {
        res.send("Server Error", error.message)
    }
}) 


module.exports = router;