
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Chorizo and Mussels'},
        { recipe_name: 'Butternut Squash Agnolotti'},
        { recipe_name: 'Sweet Potato Gnocchi with sage and applesauce'}
      ]);
    });
};
