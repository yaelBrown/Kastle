const API_PORT = process.env.api_port ? process.env.api_port : 3000;
const API_URL = process.env.api_url
  ? process.env.api_url + ":" + API_PORT
  : "localhost:" + API_PORT;
const API_VERSION = process.env.api_version
  ? `v${process.env.api_version}`
  : "v1";
const JWT_TOKEN = process.env.JWT_TOKEN
  ? process.env.JWT_TOKEN
  : "eWFlbCBicm93bi1ldmFucw==";

console.log({
  API_PORT,
  API_URL,
  API_VERSION,
  JWT_TOKEN,
});

module.exports = {
  API_PORT,
  API_URL,
  API_VERSION,
  JWT_TOKEN,
};
