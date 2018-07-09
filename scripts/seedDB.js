const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/projectinfo');

const userSeed = [
  {
    name: 'Ifra',
    email: 'Ifra@Ifra.com',
    password: "12345",
    projectName: "the Ifra Project",
    githubLink: "https://github.com/",
    synopsis:
      "Explore the project and fund it to your liking",
    image1: 'https://picsum.photos/200/300/?image=1081',
    image2: "https://picsum.photos/200/300/?image=1056",
    image3: 'https://picsum.photos/200/300/?image=1048',
    donationGoal: 1000,
    donationCurrent: 0,
    reasonForDonation: "I need it to expand my app to make better things",
    donationUsedFor: "It will be used to buy a better computer to better handle modern.",
    date: new Date(Date.now()),
  },
  {
    name: 'Shaughn',
    email: 'Shaughn@Shaughn.com',
    password: "67890",
    projectName: "the Shaughn Project",
    githubLink: "https://github.com/",
    synopsis:
      "A project that will hopefully work",
    image1: 'https://picsum.photos/200/300/?image=1020',
    image2: "https://picsum.photos/200/300/?image=587",
    image3: 'https://picsum.photos/200/300/?image=900',
    donationGoal: 2000,
    donationCurrent: 0,
    reasonForDonation: "I need it be able to complete my idea to get it to the app marketplace asap",
    donationUsedFor: "I need it to hire a temporary additional developer",
    date: new Date(Date.now()),
  },
  {
    name: 'Tanner',
    email: 'Tanner@Tanner.com',
    password: "24680",
    projectName: "Tech without borders",
    githubLink: "https://github.com/",
    synopsis:
      "A project that will expand technological advances to those without the means.",
    image1: 'https://picsum.photos/200/300/?image=1000',
    image2: "https://picsum.photos/200/300/?image=750",
    image3: 'https://picsum.photos/200/300/?image=304',
    donationGoal: 10000,
    donationCurrent: 0,
    reasonForDonation: "I'd like to update my current brick and motar store to allow more guests to assist.",
    donationUsedFor: "I need it to apply an addition and necessary updates to expand the amount of people I can help.",
    date: new Date(Date.now()),
  },
  {
    name: 'Kevin',
    email: 'Kevin@Kevin.com',
    password: "11223",
    projectName: "Stuff and Stuff",
    githubLink: "https://github.com/",
    synopsis:
      "An app that allows people to trade their stuff for other stuff locally and citywide",
    image1: 'https://picsum.photos/200/300/?image=890',
    image2: "https://picsum.photos/200/300/?image=109",
    image3: 'https://picsum.photos/200/300/?image=457',
    donationGoal: 8000,
    donationCurrent: 0,
    reasonForDonation: "I'd like to update my current system set up to provie a better service",
    donationUsedFor: "Something Cool",
    date: new Date(Date.now()),
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
