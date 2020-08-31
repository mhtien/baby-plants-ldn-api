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

const createUserDB = (data) => {
	const username = data.username
	const password = data.password
	return db
		.query(
			'INSERT INTO users(username, password) VALUES($1,$2) RETURNING username',
			[username, password]
		)
		.then((result) => result.rows[0])
}

module.exports = {
	checkUserDB,
	createUserDB,
}
