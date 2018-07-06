const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/projectinfo');

const userSeed = [
  {
    name: 'Ifra',
    email: 'Ifra@Ifra.com',
    synopsis:
      "Explore the project and fund it to your liking",
    date: new Date(Date.now()),
    image: 'http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv'
  },
  {
    name: 'Shaughn',
    email: 'Shaughn@Shaughn.com',
    synopsis:
      "Explore the project and fund it to your liking", date: new Date(Date.now()),
    image: 'http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv'
  },
  {
    name: 'Tanner',
    email: 'Tanner@Tanner.com',
    synopsis:
      "Explore the project and fund it to your liking", date: new Date(Date.now()),
    image: 'http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv'
  },
  {
    name: 'Kevin',
    email: 'Kevin@Kevin.com',
    synopsis:
      "Explore the project and fund it to your liking", date: new Date(Date.now()),
    image: 'http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv'
  },
  {
    name: 'Kevin',
    email: 'Kevin@Kevin.com',
    synopsis:
      "Explore the project and fund it to your liking",
    date: new Date(Date.now()),
    image: 'https://team-spr.com/wp-content/uploads/2018/03/photo.jpg'
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
