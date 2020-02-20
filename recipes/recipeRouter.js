const express = require('express');

const recipeDb = require('./recipesDb');

const router = express.Router();

router.get('/', (req, res) => {
    recipeDb.getRecipes()
  .then( recipe => {
    res.status(200).json(recipe);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.get('/:id', (req, res) => {
    
});

router.post('/', (req, res) => {
    
});

router.put('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});

module.exports = router;