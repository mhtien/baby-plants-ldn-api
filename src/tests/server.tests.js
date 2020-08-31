const server = require('./../server')
const supertest = require('supertest')
const test = require('tape')
const nock = require('nock')

test('check home route', (t) => {
	const mocks = nock('https://www.babyplantsldn.com')

	mocks.get('/').reply(200, { text: 'this is the home route' })

	supertest(server)
		.get('/')
		.expect(200)
		.then((res) => {
			t.equal(res.text, 'this is the home route')
			t.end()
		})
})
