const db = require('./../database/connection')

const getAllPostsDB = () => {
	return db.query('SELECT * FROM plant_posts').then((result) => result.rows)
}

const getPostsByUserIdDB = (userid) => {
	return getAllPostsDB().then((posts) => {
		return posts.filter((post) => {
			if (post['user_id'] === userid) {
				return post
			}
		})
	})
}

module.exports = {
	getAllPostsDB,
	getPostsByUserIdDB,
}
