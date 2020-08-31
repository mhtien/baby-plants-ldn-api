const db = require('./connection')
const path = require('path')
const fs = require('fs')

const initPath = path.join(__dirname, 'initTest.sql')
console.log(initPath)
const initSQL = fs.readFileSync(initPath, 'utf-8')

function build() {
	return db.query(initSQL)
}

module.exports = build
