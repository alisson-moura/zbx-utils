const postRequest = require('./postRequest')

const data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "user.login",
  "params": {
    "user": "Admin",
    "password": "zabbix"
  },
  "id": 0
})

async function login () {
  const response = await postRequest(data)
  return response.result
}


module.exports = login
