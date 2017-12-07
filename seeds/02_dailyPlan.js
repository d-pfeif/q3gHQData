
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('daily_plan').del()
    .then(function () {
      // Inserts seed entries
      return knex('daily_plan').insert([
        {
          date: '12/06/2017',
          cohort: 1,
          plan: '## Daily Plan\n\n### Help Queue\n\n- [Queue](https://docs.google.com/spreadsheets/d/1pMV_B-in7mcGUIUjnXMo7Y2Icww2T70Ln7m2QM1l6TY/edit#gid=0)\n\n### Schedule\n\n#### 9:00 am 👫 Stand up\n\n#### 12:00 pm 🍩 Lunch\n\n#### 4:00 pm Meet with your Product Owner\n\n#### 4:20 pm ✅ Survey time\n\n#### 4:30 pm 👫 Stand down\n\n things to work on at the [standards tracker](https://galvanize-standards.herokuapp.com/)'
        },
        {
          date: '12/07/2017',
          cohort: 1,
          plan: '## Daily Plan\n\n### Help Queue\n\n- [Queue](https://docs.google.com/spreadsheets/d/1pMV_B-in7mcGUIUjnXMo7Y2Icww2T70Ln7m2QM1l6TY/edit#gid=0)\n\n### Schedule\n\n#### 9:00 am 👫 Stand up\n\n#### 12:00 pm 🍩 Lunch\n\n#### 4:00 pm Meet with your Product Owner\n\n#### 4:20 pm ✅ Survey time\n\n#### 4:30 pm 👫 Stand down\n\n things to work on at the [standards tracker](https://galvanize-standards.herokuapp.com/)'
        },
        {
          date: '12/08/2017',
          cohort: 1,
          plan: '## Daily Plan\n\n### Help Queue\n\n- [Queue](https://docs.google.com/spreadsheets/d/1pMV_B-in7mcGUIUjnXMo7Y2Icww2T70Ln7m2QM1l6TY/edit#gid=0)\n\n### Schedule\n\n#### 9:00 am 👫 Stand up\n\n#### 10:00 am 🔥 Presentations!!\n\n#### 12:00 pm 🍩 Lunch\n\n#### 1:00 pm 🍻 Get TURNT-UP\n\n#### 1:30 pm 🎓 Mastery Tracking\n\n#### 4:20 pm ✅ Survey time\n\n#### 4:30 pm 👫 Stand down\n\n things to work on at the [standards tracker](https://galvanize-standards.herokuapp.com/)'
        },
        {
          date: '12/05/2017',
          cohort: 2,
          plan: "This is a plan!"
        },
        {
          date: '12/05/2017',
          cohort: 1,
          plan: '## Daily Plan\n\n### Help Queue\n\n- [Queue](https://docs.google.com/spreadsheets/d/1pMV_B-in7mcGUIUjnXMo7Y2Icww2T70Ln7m2QM1l6TY/edit#gid=0)\n\n### Game-Gamer Project\n\n- [Game-Gamer Repo](https://github.com/gSchool/galvanize-games-scrimmage)\n\nFor reference:\n\n- [Review Repo](https://github.com/gSchool/reads-tech-review)\n\n### Schedule\n\n#### 9:00 am 👫 Stand up\n\n#### 10:00 am Project Details\n\n#### 12:00 pm 🍏 Lunch\n\n#### 4:00 pm Lightning Talk\n\n- [Find the Talk Schedule Here!](https://docs.google.com/spreadsheets/d/1Q4av0J1zCylGo20amHb5U19uxgcA2NrprjOBDPATmj0/edit#gid=0)\n\n- Tomorrow: Luke, Jake\n\n#### 4:20 pm ✅ Survey time\n\n#### 4:30 pm 👫 Stand down\n\n things to work on at the [standards tracker](https://galvanize-standards.herokuapp.com/)'
        }
      ]);
    });
};
