DROP TABLE IF EXISTS Results;
DROP TABLE IF EXISTS Calculations;
DROP TABLE IF EXISTS People;

CREATE TABLE IF NOT EXISTS `Calculations` (
    id INTEGER PRIMARY KEY AUTOINCREMENT, `age` INTEGER,
    years INTEGER, `nextage` INTEGER
);

CREATE TABLE IF NOT EXISTS `People` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `Results` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    calculationId INTEGER REFERENCES `Calculations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    personID INTEGER REFERENCES `People` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Calculations (id, age, years, nextage) VALUES
    (1, 35, 5, 40), (2, 35, 10, 45);

INSERT INTO People (id, name) VALUES
    (1, "Alice"), (2, "Bob");

INSERT INTO Results (calculationId, personID) VALUES
    (1, 1), (2, 2), (2, 1);

