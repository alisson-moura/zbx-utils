const fs = require('fs').promises
const neatCsv = require('neat-csv');

async function readFile(file) {
  const data = await fs.readFile(file)
  const result = await neatCsv(data, {
    headers: ['host', 'ip'],
    separator: ';'
  })
  return result
}

module.exports = readFile