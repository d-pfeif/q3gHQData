
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('daily_plan', (table)=>{
      table.increments()
      table.string('date')
      table.integer('cohort').references('cohorts.id').onDelete('cascade')
      table.text('plan')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('daily_plan')
  ])
};
