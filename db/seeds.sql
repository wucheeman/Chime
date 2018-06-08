USE chimedb;

INSERT INTO texts (body, status, date_sent, createdAt, updatedAt)
VALUES("This is the first text", "sent", '2018-06-06', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO texts (body, status, createdAt, updatedAt)
VALUES ("This is the second text", "final", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("This is the third text", "draft", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO authors(name, createdAt, updatedAt)
VALUES("Charles Dickens", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Jane Austen", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Ernest Hemingway", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO organizations(name, createdAt, updatedAt)
VALUES("Girl Scouts of the Triangle", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Bill's Bar and Web Services", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Trader Joe's", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO followers (name, phone_number, createdAt, updatedAt)
VALUES('Abigail Adams', +11111111111, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Bill Baxter", +12222222222, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Charles Carlton", +13333333333, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Deborah Douglas", +15555555555, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Eggbert Eddleston", +14444444444, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Frieda Fumber", +16666666666, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
