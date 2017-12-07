// text - name
// text - domain
// text - standard
// text - demonstration

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mastery_tracking').del()
    .then(function () {
      // Inserts seed entries
      return knex('mastery_tracking').insert([
        {
          name: 'Lizz Robbins',
          domain: 'Experience & Exposure',
          standard: 'Observer software teams',
          demonstration: 'This is an summary of what I learned when I shadowed a software company'
        },
        {
          name: 'Dakota Pfeifer',
          domain: 'Experience & Exposure',
          standard: 'Post code publicly',
          demonstration: 'https://github.com/d-pfeif/q3gHQData'
        }
      ]);
    });
};
