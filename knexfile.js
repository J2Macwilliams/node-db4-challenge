// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipes.db3'
    },
    migrations: {
      directory: './data/addRecipesTable'
    },
    seeds: {
      directory: './data/recipeSeeds'
    },
    useNullAsDefault: 'true',
    
  },

  

};
