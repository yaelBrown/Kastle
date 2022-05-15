const jwt = require('jsonwebtoken')

const tempSecret = 'eWFlbCBicm93bi1ldmFucw=='

class Authentication {
  constructor() {
    this.secret = process.env.JWT_KEY ? process.env.JWT_KEY : 'eWFlbCBicm93bi1ldmFucw=='
  }

  createToken = (user) => {
    const days = 7 // time in days before token to expire
    if (user.password !== undefined) delete user.password
    const tokenData = {
      data: user,
      exp: Math.floor(Date.now() / 1000) + ((60 * 60) * days)
    }
    return jwt.sign(tokenData, this.secret)
  }

  isValid = token => {
    if (token === undefined) return false
    const tkn = this.verify(token)
    if (tkn === undefined) return false
    return tkn.exp > Math.floor(Date.now() / 1000)
  }

  verify = token => {
    if (token === undefined) return false
    try {
      return jwt.verify(token, this.secret)
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

}

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