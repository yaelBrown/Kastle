const jwt = require('jsonwebtoken')

class Authentication {
  constructor() {
    this.secret = process.env.JWT_KEY ? process.env.JWT_KEY : 'eWFlbCBicm93bi1ldmFucw=='
    this.days = 7 // time in days before token to expire
  }

  createToken = async (user) => {
    if (user.password !== undefined) delete user.password
    const tokenData = {
      data: user,
      exp: Math.floor(Date.now() / 1000) + ((60 * 60) * this.days)
    }
    return await jwt.sign(tokenData, this.secret)
  }

  isValid = token => token.exp > Math.floor(Date.now() / 1000)

  verify = async token => {
    if (token === undefined) return false
    try {
      return jwt.verify(token, this.secret)
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  saveToLocalStorage = token => {
    localStorage.setItem('tkn', token)
  }

  verifyFromLocalStorage = () => {
    const token = localStorage.getItem('tkn')
    if (token === undefined) {
      return False
    } else {
      const out = this.isValid(token)
      return out
    }
  }

  
}

module.exports = Authentication

/* Quick test this auth util */

// const testUser = {
//   "fname": "Hak",
//   "lname": "Ker",
//   "alias": "Hacker0x01",
//   "password": "password",
//   "email": "hacker@hackerone.com"
// }

// const auth = new Authentication()

// console.log(auth.secret)

// const aa = auth.createToken(testUser)

// console.log(aa)
// console.log(auth.verify(aa))
// console.log(auth.isValid(aa))