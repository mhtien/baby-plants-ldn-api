# Baby Plants London
REST api for baby plants giveaway in london

## About
This has been built to learn the following:
1. Test Driven Development
2. Github Actions (Continuous Integration)
3. NodeJS (Express,Bcryptjs, Jsonwebtokens)
4. PostgreSQL

## Set Up
* Clone this repo to your machine
* Run `npm install`
* Set up local database
  * run `psql` in your terminal
  * `CREATE USER myuser SUPERUSER PASSWORD mypassword`
  * `CREATE DATABASE  babyplantsldn WITH OWNER myuser`
  * `\c babyplantsldn` or if you are in the terminal `psql -d babyplantsldn -U myuser` and insert password when prompted
  * `\i src/database/init.sql`
 * Create a .env file in the root folder with `DATABASE_URL=postgres://myuser:mypassword@localhost:5432/babyplantsldn`
 
* To run tests
  * Follow the steps of setting up a local database
  * run `psql` in your terminal
  * `CREATE DATBASE babyplantsldntest WITH OWNER myuser`
   * `\c babyplantsldntest` or if you are in the terminal `psql -d babyplantsldntest -U myuser` and insert password when prompted
    * `\i src/database/initTest.sql`
    * Add into .env file `TEST_DATABASE_URL=postgress://myuser:mypassword@localhost:5432/babyplantsldntest`
 
 * For Authentication, add into the .env file a series of random numbers and letters and assign it to `JWT_SECRET="<--insert random string here-->"`
 
 * Run `npm run dev` to start the server
 
 ## Server Routes
 **Note** For route 4, 5, and 6 an access token is required. This access token is received from sign up or login. Place the access token in the request header under Bearer Token or in the header with key `acess_token`.
1. `/signup` - Post request, Form URL encoded that requires a username and a password. This returns a JSON object with the username and the access_token
2. `/login` - Post requet, Form URL encoded that requires a username and a password. This returns a JSON object with the username and the access_token
3. `/posts` - Get request, returns a JSON object with all the posts
4. `/newpost` - Post request, Form URL encoded that requires name (of plant) and location (of collection). **Note** requires access token
5. `/posts/:id` - Put request, Form URL encoded that requires name (of plant) and/or location (of collection) to udate existing details on the database. **Note** you can only update posts that you have created, replace `:id` in the url with the post id of the post. Requires access token.
6. `/posts/:id` - Delete request. **Note** you can only delete posts that you have created, replace `:id` in the url with the post id of the post. Requires access token.

## Questions
Let me know if you have any questions!

 
  
