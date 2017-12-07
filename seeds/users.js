
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: "Dakota Pfeifer",
          email: "d-pfeif@outlook.com",
          cohort: 1,
          github_handle: 'd-pfeif',
          linkedin_handle: "d-pfeif",
          password: 'qwer',
          role: 'student'
        },
        {
          name: "Lizz Robbins",
          email: "erobbins1479@gmail.com",
          cohort: 1,
          github_handle: 'lizzrobbins',
          linkedin_handle: "lizzrobbins",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Jake Robbins",
          email: "his.email@email.com",
          cohort: 1,
          github_handle: 'iamJakeRobbins',
          linkedin_handle: "iamJakeRobbins",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Geralle Estes",
          email: "me@geralle.com",
          cohort: 1,
          github_handle: 'geralle',
          linkedin_handle: "geralle",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Cole Carroll",
          email: "colecarroll2@gmail.com",
          cohort: 1,
          github_handle: 'colecarroll',
          linkedin_handle: "colecarroll",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Clark Walker",
          email: "303walker@gmail.com",
          cohort: 1,
          github_handle: 'ClarkWalker',
          linkedin_handle: "ClarkWalker",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Calvin Kreusser",
          email: "ckreusser@gmail.com",
          cohort: 1,
          github_handle: 'ckreusser',
          linkedin_handle: "ckreusser",
          password: 'asdf',
          role: 'student'
        },
        {
          name: "Brooks Patton",
          email: "brookspatton@gmail.com",
          cohort: 1,
          github_handle: 'BrooksPatton',
          linkedin_handle: "brookspatton",
          password: 'asdf',
          role: 'instructor'
        },
        {
          name: "Berto",
          email: "berto@email.com",
          cohort: 2,
          github_handle: 'berto',
          linkedin_handle: "berto",
          password: 'zxcv',
          role: 'instructor'
        }
      ]);
    });
};
