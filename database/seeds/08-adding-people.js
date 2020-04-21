exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          full_name: 'Eoin Lynch',
          slack_id: 'eoinlynch',
          age: 24,
          username: 'eoinlynch',
          email_address: 'eoin95lynch@gmail.com',
          profile_picture: 'eoinprofile.jpeg',
          location: 'Ireland',
          longitude: 53.502938,
          latitude: -7.551682,
          github_link: 'https://github.com/eoinlynchcodes',
          linkedin_link: 'https://www.linkedin.com/in/eoin-lynch-46857893/',
          portfolio_link: 'eoinlynch.com',
        },
      ]);
    });
};
