const express = require('express');
const router = express.Router()
const Recipes = require('../models/recipes')

router.put('/upRecipe/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { dishName, ingredients, steps, imgSrc } = req.body;
      const updatedRecipe = await Recipes.findByIdAndUpdate(
        id,
        { dishName, ingredients, steps, imgSrc },
        { new: true }
      );
      res.status(200).json({success:true, updatedRecipe})
  
      if (!updatedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
  
      // res.json(updatedRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error', message: error.message });
    }
  });
  

module.exports = router;