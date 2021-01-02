CREATE DATABASE livro_nodejs;
\c livro_nodejs
CREATE TABLE patents (
  id serial PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);
CREATE TABLE divisions (
  id serial PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);
CREATE TABLE stormtroopers (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  nickname TEXT NOT NULL,
  id_patent INT NOT NULL,
  FOREIGN KEY (id_patent) REFERENCES patents(id)
);
CREATE TABLE stormtrooper_division (
  id_stormtrooper INT NOT NULL,
  id_division INT NOT NULL,
  FOREIGN KEY (id_stormtrooper) REFERENCES stormtroopers(id),
  FOREIGN KEY (id_division) REFERENCES divisions(id)
);

INSERT INTO patents (name) VALUES ('Soldier'), ('Commander'), ('Captain'), ('Lieutenant'), ('Sergeant');
INSERT INTO stormtroopers (name, nickname, id_patent) VALUES ('CC-1010', 'Fox', 2);
INSERT INTO divisions (name) VALUES ('Breakout Squad'), ('501st Legion'), ('35th Infantry'), ('212th Attack Battalion'), ('Squad Seven'), ('44th Special Operations Division'), ('Lightning Squadron'), ('Coruscant Guard');
INSERT INTO stormtrooper_division (id_stormtrooper, id_division) VALUES (1, 2), (1, 8);
INSERT INTO stormtroopers (name, nickname, id_patent) VALUES ('CT-7567', 'Rex', 3), ('CC-2224', 'Cody', 2), ('', 'Hardcase', 1), ('CT-27-5555', 'Fives', 1);
INSERT INTO stormtrooper_division (id_stormtrooper, id_division) VALUES (5, 2), (4, 2), (3, 4), (2, 2);


SELECT
  stormtroopers.id,
  stormtroopers.name,
  nickname,
  patents.name AS patent,
  divisions.name AS division
FROM stormtroopers
LEFT JOIN stormtrooper_division ON stormtroopers.id = stormtrooper_division.id_stormtrooper
LEFT JOIN patents ON patents.id = stormtroopers.id_patent
LEFT JOIN divisions ON divisions.id = stormtrooper_division.id_division;
