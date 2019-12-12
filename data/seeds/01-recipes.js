
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Chorizo and Mussels'},
        {id: 2, recipe_name: 'Butternut Squash Agnolotti'},
        {id: 3, recipe_name: 'Sweet Potato Gnocchi with sage and applesauce'}
      ]);
    });
};
