const readFile = require('./readfile')
const login = require('./login')
const postRequest = require('./postRequest')

async function createHost(file) {
  const token = await login()
  const hosts = await readFile(file)
  for (element of hosts) {
    await postRequest(JSON.stringify({
      "jsonrpc": "2.0",
      "method": "host.create",
      "params": {
        "host": element.host,
        "interfaces": [
          {
            "type": 1,
                "main": 1,
                "useip": 1,
                "ip": element.ip,
                "dns": "",
                "port": "10050"
          }
        ],
        "groups": [
          {
            "groupid": ""
          },
        ],
        "templates": [
          {
            "templateid": ""
          }
        ]
      },
      "auth": token,
      "id": 1
    }))
    console.log(`Host add: ${element.host}`)
  }
  console.log('Finished')
}

createHost('example.csv').then(data => console.log(data)).catch(err => console.log(err))