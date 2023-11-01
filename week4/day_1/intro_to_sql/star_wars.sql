DROP TABLE lightsabers;
DROP TABLE characters;

CREATE TABLE characters(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    darkside BOOLEAN,
    age INT
);

CREATE TABLE lightsabers(
    id SERIAL PRIMARY KEY,
    hilt_metal VARCHAR(255) NOT NULL,
    colour VARCHAR(255) NOT NULL,
    character_id INT REFERENCES characters (id)
);

INSERT INTO characters (name, darkside, age) VALUES ('Obi-wan Kenobi', False, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Anakin Skywalker', False, 19);
INSERT INTO characters (name, darkside, age) VALUES ('Darth Maul', True, 32);
INSERT INTO characters (name, darkside) VALUES ('Yoda', False);

-- SELECT * FROM characters;
-- SELECT name FROM characters;
-- SELECT COUNT(*) FROM characters;

-- UPDATE characters SET darkside = True;
-- SELECT * FROM characters;

UPDATE characters SET darkside = True WHERE name ='Anakin Skywalker';
SELECT * FROM characters;

UPDATE characters SET (name, darkside) = ('Darth Vader', true) WHERE name = 'Anakin Skywalker';
SELECT * FROM characters;

INSERT INTO characters (name, darkside, age) VALUES ( 'Luke Skywalker', false, 17);
UPDATE characters SET age = 65 WHERE name = 'Obi-wan Kenobi';
UPDATE characters SET AGE = 700 WHERE name = 'Yoda';
SELECT * FROM characters;

DELETE FROM characters WHERE name = 'Darth Maul';
SELECT * FROM characters;

-- DELETE FROM characters;

INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);

INSERT INTO lightsabers (hilt_metal, colour, character_id) VALUES ('palladium','green', 1);
INSERT INTO lightsabers (hilt_metal, colour, character_id) VALUES ('copper','blue', 1);
INSERT INTO lightsabers (hilt_metal, colour, character_id) VALUES ('gold', 'red', 2);

-- SELECT * FROM characters;
SELECT * FROM lightsabers;

