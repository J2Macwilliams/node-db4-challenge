exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ id: 1, ingredient_name: 'butter' },
				{ id: 2, ingredient_name: 'sofrito' },
				{ id: 3, ingredient_name: 'mussels' },
				{ id: 4, ingredient_name: 'chorizo' },
				{ id: 5, ingredient_name: 'chicken stock' },
				{ id: 6, ingredient_name: 'leeks' },
				{ id: 7, ingredient_name: 'dry sherry' },
				{ id: 8, ingredient_name: 'kale' },
				{ id: 9, ingredient_name: 'white beans' },
				{ id: 10, ingredient_name: 'eggs' },
				{ id: 11, ingredient_name: 'butternut squash' },
				{ id: 12, ingredient_name: 'all purpose flour' },
				{ id: 13, ingredient_name: 'olive oil' },
				{ id: 14, ingredient_name: 'salt' }
			]);
		});
};
