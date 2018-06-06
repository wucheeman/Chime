USE chimedb;

INSERT INTO texts (body, status, date_sent, createdAt, updatedAt)
VALUES("This is the first text", "sent", '2018-06-06', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO texts (body, status, createdAt, updatedAt)
VALUES ("This is the second text", "final", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("This is the third text", "draft", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

