const db = require('./../database/connection')

const getAllPostsDB = () => {
	return db.query('SELECT * FROM plant_posts').then((result) => result.rows)
}

const getRecentPostsDB = () => {
	return db
		.query('SELECT * FROM plant_posts ORDER BY created_at DESC LIMIT 3')
		.then((result) => result.rows)
}

const getPostsByUserIdDB = (userid) => {
	return db
		.query('SELECT * FROM plant_posts WHERE user_id = $1', [userid])
		.then((result) => result.rows)
}

const getPostsByLocationDB = (location) => {
	return db
		.query('SELECT * FROM plant_posts WHERE location = $1', [location])
		.then((result) => result.rows)
}

const newPostDB = (postData) => {
	const name = postData.name
	const userId = postData['user_id']
	const location = postData.location
	return db
		.query(
			'INSERT INTO plant_posts (name, user_id, location, created_at, updated_at) VALUES($1,$2,$3, current_timestamp, current_timestamp) RETURNING *',
			[name, userId, location]
		)
		.then((result) => result.rows[0])
}

const updatePostDB = (newData) => {
	const postId = newData.id
	const name = newData.name
	const location = newData.location
	return db
		.query(
			'UPDATE plant_posts SET name = $1, location = $2, updated_at = current_timestamp WHERE id = $3 RETURNING *',
			[name, location, postId]
		)
		.then((result) => result.rows)
}

const deletePostDB = (postid) => {
	return db.query('DELETE FROM plant_posts WHERE id = $1', [postid])
}

module.exports = {
	getAllPostsDB,
	getPostsByUserIdDB,
	getPostsByLocationDB,
	newPostDB,
	updatePostDB,
	deletePostDB,
	getRecentPostsDB,
}
