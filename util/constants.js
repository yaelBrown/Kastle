// constants

API_PORT = process.env.api_port ? process.env.api_port : 3000
API_URL = process.env.api_url ? process.env.api_url + ":" + API_PORT : "localhost:" + API_PORT
API_VERSION = process.env.api_version ? `v${process.env.api_version}` : "v1"

module.exports = {
  API_PORT,
  API_URL,
  API_VERSION
}