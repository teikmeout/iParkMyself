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
  lat double precision NOT NULL,
  long double precision NOT NULL,
  dur INT NOT NULL,
  hora timestamp NOT NULL DEFAULT now()
);

CREATE TABLE payments (
  pay_id SERIAL NOT NULL,
  user_id INT NOT NULL,
  lease_id INT NOT NULL,
  hora timestamp NOT NULL DEFAULT now()
);

ALTER TABLE ONLY users
ADD CONSTRAINT username_pkey PRIMARY KEY (user_id);

ALTER TABLE ONLY leases
ADD CONSTRAINT username_pkey PRIMARY KEY (lease_id);

ALTER TABLE ONLY leases
ADD CONSTRAINT username_pkey PRIMARY KEY (pay_id);

ALTER TABLE ONLY leases
ADD CONSTRAINT username_fkey FOREIGN KEY (user_id)
REFERENCES users(user_id) On DELETE CASCADE;

ALTER TABLE ONLY payments
ADD CONSTRAINT username_

COMMIT;
