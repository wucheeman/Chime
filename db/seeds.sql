USE chimedb;

INSERT INTO `Organizations` (`name`,`followers`,`createdAt`,`updatedAt`) VALUES ('Bobs Bait and Web Services',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`followers`,`createdAt`,`updatedAt`) VALUES ('Simchas for All',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`followers`,`createdAt`,`updatedAt`) VALUES ('Intellitronics',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`followers`,`createdAt`,`updatedAt`) VALUES ('Amazin Web Store',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`followers`,`createdAt`,`updatedAt`) VALUES ('Debbies Data Services',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`followers`,`createdAt`,`updatedAt`) VALUES ('Trader Petes Code Emporium',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');


INSERT INTO `Followers` (`name`,`phone_number`,`followed_orgs`,`createdAt`,`updatedAt`) VALUES ('Amy Alligator','+11111111111',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`followed_orgs`,`createdAt`,`updatedAt`) VALUES ('Bob Bear','+12222222222',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`followed_orgs`,`createdAt`,`updatedAt`) VALUES ('Charles Coyote','+13333333333',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`followed_orgs`,`createdAt`,`updatedAt`) VALUES ('Delores Dolphin','+14444444444',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`followed_orgs`,`createdAt`,`updatedAt`) VALUES ('Edward Eagle','+15555555555',NULL,'2018-06-10 13:22:58','2018-06-10 13:22:58');

INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is world','final','2018-06-10 13:22:58','2018-06-10 13:22:58',1);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is apple','draft','2018-06-10 13:23:26','2018-06-10 13:23:26',2);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is banana','draft','2018-06-10 13:23:56','2018-06-10 13:23:56',1);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is cucumber','draft','2018-06-10 13:23:56','2018-06-10 13:23:56',4);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is durian','draft','2018-06-10 13:23:56','2018-06-10 13:23:56',1);

-- TO RUN, do the following in bash ($ is the command prompt)
--
-- cd to the 'db' folder
-- 
--  $ mysql -u <user name> -p <your password> chimedb < seeds.sql
--
-- omit '-p <your password>' if you don't have one
