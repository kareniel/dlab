const http = require('http')
const host = {
  hostname: '91.198.22.70', // checkip.dyndns.org
  port: 80
}

function getExternalIP () {
  return new Promise((resolve, reject) => {
    http.get(host, res => {
      let rawData = ''

      res.on('error', err => reject(err))
      res.on('data', chunk => rawData += chunk)
      res.on('end', () => {
        const start = rawData.indexOf('Current IP Address: ') + 20
        const end = rawData.lastIndexOf('</body>')
        const externalIP = rawData.slice(start, end)

        resolve(externalIP)
      })
    })
  })
}

getExternalIP().then(r => {
  console.log(r)
})