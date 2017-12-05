
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('daily_plan').del()
    .then(function () {
      // Inserts seed entries
      return knex('daily_plan').insert([
        {
          date: 'Dec 5, 2017',
          cohort: 1,
          plan: "# Mark this down!"
        }
      ]);
    });
};
