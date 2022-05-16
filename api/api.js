// import axios from 'axios'

const axios = require("axios");
const CONST = "../util/constants.js";

class Api {
  constructor(path) {
    // this.api_url = CONST.API_URL
    // this.url = `${this.api_url}/${CONST.API_VERSION}/${path}`

    this.url = `http://localhost:3000/api/v1/${path}`;
  }

  makeRequest = async (payload, method) => {
    // axios(this.api_url, {
    await axios(this.url, {
      method,
      data: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((data) => {
        return data;
      })
      .catch((err) => console.error(err));
  };
}

module.exports = Api;

// test this util

const aa = { username: "AdminUser", password: "password" };

const api = new Api("user/login");

const response = api.makeRequest(aa, "POST");
// axios.post("http://localhost:3000/api/v1/user/login", aa).then(res => res.data).then(data => console.log(data))

console.log(api.url);
console.log(response);
