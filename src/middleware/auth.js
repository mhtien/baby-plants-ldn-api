const userModel = require('./../model/users')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const SECRET = process.env.JWT_SECRET

const verifyUser = async (req, res, next) => {
	const headers = req.headers.authorization

	if (!headers) {
		const error = new Error('bad request!')
		error.status = 400
		next(error)
	}

	const token = headers.replace('Bearer ', '')

	const payload = jwt.verify(token, SECRET)
	const userId = payload['user_id']

	const checkUser = await userModel.getUserByIdDB(userId)

	if (!checkUser) {
		const error = new Error('Opps you are not logged in')
		error.status = 401
		next(error)
	}
	req.user = {
		id: checkUser.id,
	}
	next()
}

module.exports = verifyUser
