
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {
          number: 64,
          campus: 'Platte'
        },
        {
          number: 46,
          campus: 'Golden Triangle'
        }
      ]);
    });
};
