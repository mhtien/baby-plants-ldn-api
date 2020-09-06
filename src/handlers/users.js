const bcrypt = require('bcryptjs')
const userModel = require('./../model/users')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

const userLogin = async (req, res, next) => {
	const { username, password } = req.body
	const user = await userModel.checkUserDB(username)
	if (!user) {
		const error = new Error('Something went wrong')
		error.status = 401
		next(error)
	}
	const usernameDB = user.username
	const passwordDB = user.password
	const userId = user.id
	// compare passwords
	const isPasswordCorrect = await bcrypt.compare(password, passwordDB)
	if (!isPasswordCorrect) {
		const error = new Error('Invalid password')
		error.status = 401
		next(error)
	}
	const token = jwt.sign(userId, SECRET)
	const response = {
		username: usernameDB,
		access_token: token,
	}
	res.status(200).send(response)
}

const userSignUp = async (req, res, next) => {
	const { username, password } = req.body
	const userExists = await userModel.checkUserDB(username)
	if (!userExists) {
		bcrypt
			.genSalt(10) // "staffan"
			.then((salt) => bcrypt.hash(password, salt))
			.then((hashedPwd) => {
				return userModel.createUserDB({
					username: username,
					password: hashedPwd,
				})
			})
			.then((user) => {
				console.log('user', user)
				const { id, username } = user
				const token = jwt.sign(id, SECRET, {
					// expiresIn: '1h',
				})
				const response = {
					username: username,
					access_token: token,
				}
				res.status(201).send(response)
			})
			.catch(next)
	} else {
		res.status(409).send(`<h1>User already exists</h1>`)
	}
}

module.exports = {
	userLogin,
	userSignUp,
}
