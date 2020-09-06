const postsModel = require('./../model/posts')
const userModel = require('./../model/users')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

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

const createNewPost = async (req, res, next) => {
	const body = req.body
	const userId = req.user.id

	body['user_id'] = userId

	postsModel
		.newPostDB(body)
		.then((result) => res.status(201).send(result))
		.catch(next)
}

const updatePost = (req, res, next) => {
	const body = req.body
	const postId = req.params.id
	body.id = postId

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
