
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: "Dakota Pfeifer",
          email: "some.email@email.com",
          cohort: 1,
          github_handle: 'd-pfeif',
          linkedin_handle: "d-pfeif",
          password: 'qwer',
          role: 'student'
        },
        {
          name: "Lizz Robbins",
          email: "another.email@email.com",
          cohort: 1,
          github_handle: 'lizzrobbins',
          linkedin_handle: "lizzrobbins",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Berto",
          email: "berto@email.com",
          cohort: 2,
          github_handle: 'berto',
          linkedin_handle: "berto",
          password: 'zxcv',
          role: 'teacher'
        }
      ]);
    });
};
