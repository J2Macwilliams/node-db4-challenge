exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_detail').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_detail').insert([
        {recipes_id: 1, recipe_name: 'Chorizo and Mussels', ingredients_id: '6', quantity: 2 , measurement_unit: 'whole', instruction_id: 1},
        {recipes_id: 1, recipe_name: 'Chorizo and Mussels', ingredients_id: '13', quantity: 2 , measurement_unit: 'T.', instruction_id: 1},
        {recipes_id: 1, recipe_name: 'Chorizo and Mussels', ingredients_id: '4', quantity: 1 , measurement_unit: 'lb.', instruction_id: 2}
      ]);
    });
};
