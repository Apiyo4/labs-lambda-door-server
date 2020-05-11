exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.integer('age');
    table.varchar('github_link');
    table.varchar('linkedin_link');
    table.varchar('portfolio_link');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
