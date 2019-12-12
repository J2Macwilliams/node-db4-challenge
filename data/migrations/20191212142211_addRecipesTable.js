exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.string('recipe_name', 128).notNullable();
		})
		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.string('ingredient_name', 255).notNullable();
        })
        
		.createTable('recipe_detail', tbl => {
			tbl.primary(['recipes_id', 'ingredients_id', 'instruction_id']);
			tbl
				.integer('recipes_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('tickets');

			tbl.string('name', 128).notNullable();

			tbl
				.integer('ingredients_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('employees');

			tbl.float('quantity', 255).notNullable();

			tbl.string('measurement_unit', 255).notNullable();

			tbl
				.integer('instructions_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('employees');
		});
};

exports.down = function(knex) {};
