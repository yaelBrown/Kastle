const { Organizations } = require("../models");

const OrganizationsData = [
  {
    name: "Demo",
    platform: "aws",
    username: "kastle",
    password: "$2a$12$FkRkgKYlDa1JFDe399p0CuJcKHjaNw8mR4vAgCYzbJ1O1eddztRte",
  },
];

const seedOrganizations = () => Organizations.bulkCreate(OrganizationsData);

module.exports = seedOrganizations;
