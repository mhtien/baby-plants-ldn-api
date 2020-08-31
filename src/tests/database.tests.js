const build = require('./../database/build')
const postsModels = require('./../model/posts')
const usersModels = require('./../model/users')
const test = require('tape')

test('Get all posts', (t) => {
	build().then(() => {
		postsModels.getAllPostsDB().then((posts) => {
			let lastPost = posts[posts.length - 1]
			t.equal(lastPost.name, 'cactus')
			t.equal(lastPost.location, 'boobooland')
			t.end()
		})
	})
})

test('Get posts from specific user by ID', (t) => {
	build().then(() => {
		const userid = 2
		postsModels.getPostsByUserIdDB(userid).then((posts) => {
			let firstPost = posts[0]
			t.equal(firstPost.name, 'oxalis')
			t.equal(firstPost.location, 'gavle')
			t.end()
		})
	})
})

test('Check if user exists - actual user', (t) => {
	build().then(() => {
		const username = 'moo'
		usersModels.checkUserDB(username).then((user) => {
			t.equal(user.username, 'moo')
			t.end()
		})
	})
})

test('Check if user exists - non-existent user', (t) => {
	build().then(() => {
		const username = 'schnuki'
		usersModels.checkUserDB(username).then((user) => {
			t.equal(user, undefined)
			t.end()
		})
	})
})

// test('Insert a new user and password', (t) => {
// 	build().then(() => {
// 		const data = { username: 'milk', password: 'shake' }
// 		usersModels.createUserDB(data).then((userData) => {
// 			usersModels.checkUserDB(userData.username).then((user) => {
// 				t.equal(user.username, 'milk')
// 				t.end()
// 			})
// 		})
// 	})
// })

// test('Select all posts based on location', (t) => {
// 	build().then(() => {
// 		postsModels.getPostsByLocationDB().then((posts) => {
// 			t.equal(posts.length, 2)
// 			t.end()
// 		})
// 	})
// })

// test('Inset new post', (t) => {
// 	build().then(() => {
// 		const postData = { name: 'tomato plant', user_id: 1, location: 'newham' }
// 		postsModels.newPostDB(postData).then(() => {
// 			postsModels.getAllPostsDB().then((posts) => {
// 				const lastPost = posts[posts.length - 1]
// 				t.equal(lastPost.name, 'tomato plant')
// 				t.equal(lastPost.location, 'newham')
// 				t.end()
// 			})
// 		})
// 	})
// })

// test('update existing post', (t) => {
// 	build().then(() => {
// 		const newData = { id: 1, name: 'chilli plant', location: 'lake district' }
// 		postsModels.updatePostDB(newData).then(() => {
// 			postsModels.getAllPostsDB().then((posts) => {
// 				const firstPost = posts[0]
// 				t.equal(firstPost.name, 'chilli plant')
// 				t.equal(firstPost.location, 'lake district')
// 				t.end()
// 			})
// 		})
// 	})
// })

// test('delete existing post', (t) => {
// 	build().then(() => {
// 		postsModels.deletePostDB(1).then(() => {
// 			postsModels.getAllPostsDB().then((posts) => {
// 				const firstPost = posts[0]
// 				t.notEqual(firstPost.name, 'spider plant')
// 				t.notEqual(firstPost.location, 'hoxton')
// 				t.end()
// 			})
// 		})
// 	})
// })
