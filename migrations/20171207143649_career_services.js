// text - user_id
// text - doc_type
// text - link

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('career_services', (table)=>{
      table.increments()
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.text('doc_type')
      table.text('link')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('career_services')
  ])
};
