const db = require('./../database/connection')

const checkUserDB = (username) => {
	return db.query('SELECT * FROM users').then((users) => {
		users = users.rows
		const result = users.filter((user) => {
			if (user.username === username) {
				return user
			}
		})
		return result[0]
	})
}

module.exports = {
	checkUserDB,
}
