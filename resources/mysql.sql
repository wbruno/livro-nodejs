CREATE DATABASE livro_nodejs;
use livro_nodejs;
CREATE TABLE patents (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL, PRIMARY KEY(id)
);
CREATE TABLE divisions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL, PRIMARY KEY(id)
);
CREATE TABLE stormtroopers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  nickname varchar(50) NOT NULL,
  id_patent int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (id_patent) REFERENCES patents(id)
);
CREATE TABLE stormtrooper_division (
  id_stormtrooper int NOT NULL,
  id_division int NOT NULL,
  FOREIGN KEY (id_stormtrooper) REFERENCES stormtroopers(id),
  FOREIGN KEY (id_division) REFERENCES divisions(id)
);


INSERT INTO patents VALUES (NULL, 'Soldier'), (NULL, 'Commander'), (NULL, 'Captain'), (NULL, 'Lieutenant'), (NULL, 'Sergeant');
INSERT INTO stormtroopers VALUES (NULL, 'CC-1010', 'Fox', 2);
INSERT INTO divisions VALUES (NULL, 'Breakout Squad'), (NULL, '501st Legion'), (NULL, '35th Infantry'), (NULL, '212th Attack Battalion'), (NULL, 'Squad Seven'), (NULL, '44th Special Operations Division'), (NULL, 'Lightning Squadron'), (NULL, 'Coruscant Guard');
INSERT INTO stormtrooper_division (id_stormtrooper, id_division) VALUES (1, 2), (1, 8);
INSERT INTO stormtroopers VALUES (NULL, 'CT-7567', 'Rex', 3), (NULL, 'CC-2224', 'Cody', 2), (NULL, '', 'Hardcase', 1), (NULL, 'CT-27-5555', 'Fives', 1);
INSERT INTO stormtrooper_division (id_stormtrooper, id_division) VALUES (5, 2), (4, 2), (3, 4), (2, 2);


SELECT stormtroopers.id, stormtroopers.name, nickname, patents.name AS patent, divisions.name AS division FROM stormtroopers LEFT JOIN stormtrooper_division ON stormtroopers.id = stormtrooper_division.id_stormtrooper LEFT JOIN patents ON patents.id = stormtroopers.id_patent LEFT JOIN divisions ON divisions.id = stormtrooper_division.id_division;
