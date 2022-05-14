const seedUsers = require('./seeds-user')

const sequelize = require('../config/connection.js')

const displayConsoleLine = nameOfSeed => console.log(`\n ------ ${nameOfSeed.toUpperCase()} ----- \n`)

const seedAll = async () => {
  await sequelize.sync({force: true})
  displayConsoleLine("database synced")
  await seedUsers()
  displayConsoleLine("users seeded")
  process.exit(0)
}

seedAll()