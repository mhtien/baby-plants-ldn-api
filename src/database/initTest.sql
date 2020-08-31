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
  location VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

SET TIMEZONE = 'Europe/London';

INSERT INTO users(username, password) VALUES 
  ('moo', 'iloveplants'),
  ('staffan', 'imokwithplants'),
  ('puki', 'unicornplants')
;

INSERT INTO plant_posts(name, user_id, location, created_at, updated_at) VALUES 
  ('spider plant', 1, 'hoxton', current_timestamp, current_timestamp),
  ('pink geranium', 1, 'gavle', current_timestamp, current_timestamp),
  ('oxalis', 2, 'gavle', current_timestamp, current_timestamp),
  ('cactus', 2, 'boobooland', current_timestamp, current_timestamp)
;


COMMIT;