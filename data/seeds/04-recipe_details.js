
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        {recipes_id: 1, recipe_name: 'Chorizo and Mussels', ingredients_id: '6', quantity: 2 , measurment_unit: 'whole', instruction_id: 1},
        {recipes_id: 1, recipe_name: 'Chorizo and Mussels', ingredients_id: '13', quantity: 2 , measurment_unit: 'T.', instruction_id: 1},
        {recipes_id: 1, recipe_name: 'Chorizo and Mussels', ingredients_id: '4', quantity: 1 , measurment_unit: 'lb.', instruction_id: 2}
      ]);
    });
};
