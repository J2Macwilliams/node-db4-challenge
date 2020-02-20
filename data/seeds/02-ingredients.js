exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ ingredient_name: 'butter' },
				{ ingredient_name: 'sofrito' },
				{ ingredient_name: 'mussels' },
				{ ingredient_name: 'chorizo' },
				{ ingredient_name: 'chicken stock' },
				{ ingredient_name: 'leeks' },
				{ ingredient_name: 'dry sherry' },
				{ ingredient_name: 'kale' },
				{ ingredient_name: 'white beans' },
				{ ingredient_name: 'eggs' },
				{ ingredient_name: 'butternut squash' },
				{ ingredient_name: 'all purpose flour' },
				{ ingredient_name: 'olive oil' },
				{ ingredient_name: 'salt' }
			]);
		});
};
