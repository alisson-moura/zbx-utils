const http = require('http')

const postRequest = (data) => {

  const options = {
    hostname: 'ip_zabbix',
    path: '/zabbix/api_jsonrpc.php',
    port: 80,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      console.log(res.statusCode)
      res.on('data', d => {
        resolve(JSON.parse(d))
      })
    })

    req.on('error', error => {
      reject(error)
      return
    })

    req.write(data)
    req.end()
  })
}

module.exports = postRequest