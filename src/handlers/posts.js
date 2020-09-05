const postsModel = require('./../model/posts')

const getRecentPosts = (req, res, next) => {
	postsModel
		.getRecentPostsDB()
		.then((result) => res.send(result))
		.catch(next)
}

const getPostsById = (req, res, next) => {
	const userId = req.params.id
	postsModel.getPostsByUserIdDB(userId).then((result) => res.send(result))
}

const getAllPosts = (req, res, next) => {
	postsModel
		.getAllPostsDB()
		.then((result) => res.send(result))
		.catch(next)
}

const getPostsByLocation = (req, res, next) => {
	const location = req.params.location
	postsModel
		.getPostsByLocationDB(location)
		.then((result) => res.send(result))
		.catch(next)
}

const createNewPost = (req, res, next) => {
	const body = req.body
	//get user Id from cookie rather than add it on manually
	postsModel
		.newPostDB(body)
		.then((result) => res.send(result))
		.catch(next)
}

const updatePost = (req, res, next) => {
	const body = req.body
	console.log(body)
	//get user Id from cookie rather to authenticate
	postsModel
		.updatePostDB(body)
		.then((result) => res.send(result))
		.catch(next)
}

const deletePost = (req, res, next) => {
	const id = req.params.id
	postsModel.deletePostDB(id).then(() => res.send('post deleted'))
}

module.exports = {
	getRecentPosts,
	getPostsById,
	getAllPosts,
	getPostsByLocation,
	createNewPost,
	updatePost,
	deletePost,
}
