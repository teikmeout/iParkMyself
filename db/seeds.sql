BEGIN;

INSERT INTO users (username, f_name, l_name, email, pass, type) VALUES
('taka', 'jona', 'ahrens', 'taka@teikmeout.com', '4321', '0'),
('mayo', 'bill', 'mayo', 'bill@mayo.com', '4321', '1'),
('sabri', 'sabrina', 'mesa', 'sabrina@mesa.com', '4321', '0'),
('krys', 'kristina', 'malewski', 'kristina@malewski.com', '4321', '1'),
('hadas', 'hadas', 'werman', 'hadas@werman.com', '4321', '1');

INSERT INTO leases (user_id, lat, long, dur) VALUES
(1, 40.7304635, -71.9928248, 30),
(5, 40.6504635, -75.9928248, 15),
(2, 40.7904786, -73.8844997, 60),
(3, 40.6543879, -74.9928248, 120),
(4, 40.6549870, -74.8877654, 120);

COMMIT;
