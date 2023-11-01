psql -d marvel -f marvel.sql

SELECT * FROM movies;

SELECT name FROM people;

UPDATE people SET name 'Krusty' WHERE name = 'Crusty';

SELECT name FROM people WHERE name = 'Homer Simpson';

DELETE FROM movies WHERE title = 'Batman begins';

INSERT INTO people (name) values ('Bart Simpson');

DELETE FROM people WHERE name = 'Eric Cartman';

INSERT INTO movies (title, year, show_time) values ('Avengers', 2018, '00:00');

SELECT show_time FROM movies WHERE title = 'Iron Man 2';
UPDATE movies SET show_time = '20:45' WHERE title = 'Iron Man 3';

DELETE FROM movies WHERE name = 'Iron Man 2' or 'Iron Man 3';



