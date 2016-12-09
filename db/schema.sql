BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS leases CASCADE;
DROP TABLE IF EXISTS payments CASCADE;

CREATE TABLE users (
  user_id SERIAL NOT NULL,
  username VARCHAR(50) NOT NULL,
  f_name VARCHAR(50) NOT NULL,
  l_name VARCHAR(50) NOT NULL,
  email VARCHAR NOT NULL,
  pass VARCHAR NOT NULL,
  type VARCHAR NOT NULL DEFAULT 1
);

CREATE TABLE leases (
  lease_id SERIAL NOT NULL,
  user_id INT NOT NULL,
  latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  duration INT NOT NULL,
  time_stuff timestamp NOT NULL
);

CREATE TABLE payments (
  pay_id SERIAL NOT NULL,
  user_id INT NOT NULL,
  lease_id INT NOT NULL,
  time_stuff timestamp NOT NULL
);

COMMIT;
