
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128)
  })


};

exports.down = function(knex) {
  
};
