const db = require('./../database/connection')

const getAllPostsDB = () => {
	return db.query('SELECT * FROM plant_posts').then((result) => result.rows)
}

module.exports = {
	getAllPostsDB,
}
