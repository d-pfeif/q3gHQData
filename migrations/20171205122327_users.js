
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table)=>{
      table.increments()
      table.string('name')
      table.string('email')
      table.integer('cohort').references('cohorts.id').onDelete('cascade')
      table.string('github_handle')
      table.string('linkedin_handle')
      table.string('password')
      table.string('role')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
