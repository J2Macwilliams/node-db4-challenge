exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.string('recipe_name', 128).notNullable().unique().index();
		})

		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.string('ingredient_name', 255).notNullable().unique().index();
		})

		.createTable('instructions', tbl => {
			tbl.increments();
			tbl.integer('step_number').notNullable();
			tbl.string('instruction_step').notNullable();
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");
		})
		.createTable('recipe_detail', tbl => {
			tbl.increments();
			tbl
				.integer('recipes_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");

			tbl.string('recipe_name', 128).notNullable().index();

			tbl
				.integer('ingredients_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");

			tbl.float('quantity', 255).notNullable();

			tbl.string('measurement_unit', 255).notNullable();

			tbl
				.integer('instruction_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('instructions')
				.onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");
		});
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('recipe_detail');
    knex.schema.dropTableIfExists('instructions');
    knex.schema.dropTableIfExists('ingredients');
    knex.schema.dropTableIfExists('recipes');
};
