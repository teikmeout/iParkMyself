BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS leases CASCADE;
DROP TABLE IF EXISTS payments CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(50) NOT NULL,
  f_name VARCHAR(50) NOT NULL,
  l_name VARCHAR(50) NOT NULL,
  email VARCHAR NOT NULL,
  pass VARCHAR NOT NULL,
  type VARCHAR NOT NULL DEFAULT 1
);

CREATE TABLE leases (
  lease_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL references users(user_id),
  lat double precision NOT NULL,
  long double precision NOT NULL,
  dur INT NOT NULL,
  hora timestamp NOT NULL DEFAULT now()
);

CREATE TABLE payments (
  pay_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL references users(user_id),
  lease_id INT NOT NULL references leases(lease_id),
  hora timestamp NOT NULL DEFAULT now()
);

COMMIT;
