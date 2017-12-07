// text - name
// text - domain
// text - standard
// text - demonstration

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('mastery_tracking', (table)=>{
      table.increments()
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.text('domain')
      table.text('standard')
      table.text('demonstration')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('mastery_tracking')
  ])
};
