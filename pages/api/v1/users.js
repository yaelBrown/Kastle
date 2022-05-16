import UsersModel from '../../../db/models/UsersModel'
import bcrypt from 'bcryptjs/dist/bcrypt'
// import Authentication from '../../../util/authentication/Authentication'

// const auth = Authentication()

export default async function handler(req, res) {

  if (req.method === 'POST') {

    // CREATE user
    try {
      const body = req.body
      body.isOrgAdmin = false
      body.password = await bcrypt.hash(body.password, 12)

      const userData = await UsersModel.create(body)
      const out = { ...userData.dataValues }

      delete out.password

      res.status(201).json({
        msg: "CREATED",
        data: out
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        msg: "Internal Server Error",
      })
    }
  } else if (req.method === 'PUT') {

    // UPDATE User
    try {
      const body = req.body
      if (body.id === undefined || isNaN(body.id)) throw "Id was not passed in request"

      const userData = await UsersModel.update(body, {
        where: { id: body.id }
      })

      const out = { ...userData.dataValues }

      delete out.password

      res.status(200).json({
        msg: "UPDATED",
        data: out
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        msg: "Internal Server Error",
      })
    }

  } else if (req.method === 'DELETE') {
    
    // DELETE User
    try {
      const body = req.body
      if (body.id === undefined || isNaN(body.id)) throw "Id was not passed in request"

      const userData = await UsersModel.destroy({
        where: { id: body.id }
      })

      const out = { ...userData.dataValues }
      delete out.password

      res.status(200).json({
        msg: "DELETED",
        data: out
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        msg: "Internal Server Error",
      })
    }
  }
}