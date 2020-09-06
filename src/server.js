const express = require('express')
const server = express()
const postsHandlers = require('./handlers/posts')
const userHandlers = require('./handlers/users')
const handleError = require('./middleware/error')
// need to require all handlers

server.use(express.json())

// 1. Home route - get recent posts
server.get('/', postsHandlers.getRecentPosts)

// 2. Posts by ID route - get posts by user id
server.get('/posts/:id', postsHandlers.getPostsById)

// 3. Login route - post
server.post('/login', express.urlencoded(), userHandlers.userLogin)

// 4. Posts route - get all posts
server.get('/posts', postsHandlers.getAllPosts)

// 5. Signup route - post
server.post('/signup', express.urlencoded(), userHandlers.userSignUp)

// 6. Posts by location route
server.get('/posts/location/:location', postsHandlers.getPostsByLocation)

// 7. Missing route - for all other urls

// 8. New post route - post
server.post('/newpost', express.urlencoded(), postsHandlers.createNewPost)

// 9. Post route - put
server.put('/post/:id', express.urlencoded(), postsHandlers.updatePost)

// 10. Post route - delete
server.delete('/post/:id', postsHandlers.deletePost)

server.use(handleError)

module.exports = server
