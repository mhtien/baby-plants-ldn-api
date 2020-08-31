BEGIN;

DROP TABLE IF EXISTS users, plant_posts CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE plant_posts
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  location VARCHAR(255) NOT NULL
);

INSERT INTO users(username, password) VALUES 
  ('moo', 'iloveplants'),
  ('staffan', 'imokwithplants')
;

INSERT INTO plant_posts(name, user_id, location) VALUES 
  ('spider plant', 1, 'hoxton'),
  ('oxalis', 2, 'galve')
;


COMMIT;