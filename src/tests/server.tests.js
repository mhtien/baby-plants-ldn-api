const test = require('tape')
const supertest = require('supertest')
const nock = require('nock')
const server = require('./../server')
const build = require('./../database/build')

// test('initialise', (t) => {
// 	let num = 2
// 	t.equal(num, 2, 'should return 2')
// 	t.end()
// })

test('check home route', (t) => {
	const mocks = nock('http://localhost:3000') // nock not intercepting
	mocks.get('/posts').reply(200, { text: 'this is the home route' })

	supertest(server)
		.get('/posts')
		.expect(200)
		.then((res) => {
			t.equal(res.body, 'spider plant')
			t.end()
		})
})
