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
	const { username, password } = data
	return db
		.query(
			'INSERT INTO users(username, password) VALUES($1,$2) RETURNING id, username',
			[username, password]
		)
		.then((result) => result.rows[0])
}

const getUserByIdDB = (id) => {
	return db
		.query('SELECT * FROM users WHERE id = $1', [id])
		.then((result) => result.rows[0])
}

module.exports = {
	checkUserDB,
	createUserDB,
	getUserByIdDB,
}
