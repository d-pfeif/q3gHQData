// text - user_id
// text - docType
// text - link

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('career_services').del()
    .then(function () {
      // Inserts seed entries
      return knex('career_services').insert([
        {
          user_id: 2,
          doc_type: 'Resume',
          link: 'https://drive.google.com/open?id=1ib5fG-a3re2IWxvHDGgXP1tz-6w2k9mQ'
        },
        {
          user_id: 3,
          doc_type: 'Personal Website',
          link: 'http://www.prdesign.work/'
        }
      ]);
    });
};
