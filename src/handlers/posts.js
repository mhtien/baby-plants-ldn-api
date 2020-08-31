const postsModel = require('./../model/posts')

const getRecentPosts = (req, res, next) => {}

const getPostsById = (req, res, next) => {}

const getAllPosts = (req, res, next) => {
	postsModel
		.getAllPostsDB()
		.then((result) => {
			res.send(result)
		})
		.catch(next)
}

const getPostsByLocation = (req, res, next) => {}

const createNewPost = (req, res, next) => {}

const updatePost = (req, res, next) => {}

const deletePost = (req, res, next) => {}

module.exports = {
	getRecentPosts,
	getPostsById,
	getAllPosts,
	getPostsByLocation,
	createNewPost,
	updatePost,
	deletePost,
}
