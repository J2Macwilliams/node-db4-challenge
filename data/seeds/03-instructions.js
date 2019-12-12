
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step_number: 1, instruction_step: 'Wash, Chop, Sautee Leeks in Olive oil in a dutch oven, .', recipe_id: '1'},
        {id: 2, step_number: 2, instruction_step: 'Add chorizo for min till browned', recipe_id: '1'},
        {id: 3, step_number: 3, instruction_step: 'Add sofrito and Chicken Stock, simmer for 30 minutes.', recipe_id: '1'}
      ]);
    });
};
