const { Users } = require("../models");

const UsersData = [
  {
    fname: "Admin",
    lname: "User",
    alias: "AdminUser",
    password: "$2a$12$w/pXTMCsV39QTziQWJ3cseBNAuzb4b00NgT0i9iJIJ1Z9lfmZqtYe",
    email: "adminuser@mailinator.com",
    organization_id: 0,
    isOrgAdmin: false,
  },
  {
    fname: "Demo",
    lname: "User1",
    alias: "DemoUser1",
    password: "$2a$12$w/pXTMCsV39QTziQWJ3cseBNAuzb4b00NgT0i9iJIJ1Z9lfmZqtYe",
    email: "demouser1@mailinator.com",
    organization_id: 0,
    isOrgAdmin: false,
  },
  {
    fname: "Demo",
    lname: "User2",
    alias: "DemoUser2",
    password: "$2a$12$w/pXTMCsV39QTziQWJ3cseBNAuzb4b00NgT0i9iJIJ1Z9lfmZqtYe",
    email: "demouser2@mailinator.com",
    organization_id: 0,
    isOrgAdmin: false,
  },
  {
    fname: "Demo",
    lname: "User3",
    alias: "DemoUser3",
    password: "$2a$12$w/pXTMCsV39QTziQWJ3cseBNAuzb4b00NgT0i9iJIJ1Z9lfmZqtYe",
    email: "demouser3@mailinator.com",
    organization_id: 0,
    isOrgAdmin: false,
  },
];

const seedUsers = () => Users.bulkCreate(UsersData);

module.exports = seedUsers;
