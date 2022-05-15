import UsersModel from '../../../../db/models/UsersModel'
import bcrypt from 'bcryptjs/dist/bcrypt'

const handler = async (req, res) => {

  // Login user
  try {
    if (req.method == "POST") {
      const body = req.body
      if (body.username === undefined || body.password === undefined) throw "Invalid username or password"

      const query = { val: body.username }

      if (query.val.includes("@") === true) {
        query.type = "email"
      } else if (!isNaN(query.val)) {
        query.type = "id"
      } else {
        query.type = "alias"
      }

      let out = "User Not Found"
      switch (query.type) {
        case "alias":
          out = await UsersModel.findOne({
            where: { alias: query.val }
          })
          break
        case "email":
          out = await UsersModel.findOne({
            where: { email: query.val }
          })
          break
        default:
          break;
      }

      out = out.dataValues

      if (await bcrypt.compare(body.password, out.password)) {
        out = { ...out }
        delete out.password

        res.status(200).json({
          msg: "OK",
          data: out
        })
      } 
      
      res.status(200).json({ msg: "Invalid username or password" })

    } else {
      throw "Invalid request method"
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: "Internal Server Error",
    })
  }

}

export default handler