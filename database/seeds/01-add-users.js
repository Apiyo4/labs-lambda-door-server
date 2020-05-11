exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    {
      full_name: 'Lisa Wilton',
      slack_id: 'Lisa Wilton',
      username: 'Lisawilton',
      email_address: 'lisa@lambdaschool.com',
      location: '',
      longitude: 0.1278,
      latitude: 51.5074,
      profile_picture: '',
    },
    {
      full_name: 'Chioma Nkem-Eze',
      slack_id: 'Jessica Eze',
      username: 'chiomaeze',
      email_address: 'chioma@lambdaschool.com',
      location: '',
      longitude: -84.38633,
      latitude: 33.753746,
      profile_picture: '',
    },
    {
      full_name: 'Victor Arowo',
      slack_id: 'Victor',
      username: 'Victor',
      email_address: 'arowove@g.com',
      location: '',
      longitude: 0,
      latitude: 0,
      profile_picture: '',
    },
    {
      full_name: 'Emily Abrahart',
      slack_id: 'Emily',
      username: 'Emily',
      email_address: 'emilyabraharty@gmail.com',
      location: '',
      longitude: 0,
      latitude: 0,
      profile_picture: '',
    },
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
};
