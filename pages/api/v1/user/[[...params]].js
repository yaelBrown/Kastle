import UsersModel from '../../../../db/models/UsersModel'

export default async function handler(req, res) {
  // GET one user by email, id, or alias
  try {
    const params = req.query.params
    if (params === undefined) {
      throw "No query to search for user specified"
    }

    const query = { val: params[0] }

    if (params[0].includes("@") === true) {
      query.type = "email"
    } else if (!isNaN(params)) {
      query.type = "id"
    } else {
      query.type = "alias"
    }
    
    console.log(query)
    let out = "User Not Found"
    switch (query.type) {
      case "alias":
        out = await UsersModel.findOne({
          where: {alias: query.val}
        })
        break
      case "id":
        out = await UsersModel.findOne({
          where: {id: query.val}
        })
        break
      case "email":
        out = await UsersModel.findOne({
          where: {email: query.val}
        })
        break
      default:
        break;
    }

    out = { ...out }
    delete out.password

    res.status(200).json({
      msg: "OK",
      data: out
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: "Internal Server Error",
    })
  }
}