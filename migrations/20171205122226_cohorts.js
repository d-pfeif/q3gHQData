
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cohorts', (table)=>{
      table.increments()
      table.integer('number')
      table.string('campus')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cohorts')
  ])
};
