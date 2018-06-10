USE chimedb;

INSERT INTO `Organizations` (`name`,`createdAt`,`updatedAt`) VALUES ('Bobs Bait and Web Services','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`createdAt`,`updatedAt`) VALUES ('Simchas for All','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`createdAt`,`updatedAt`) VALUES ('Intellitronics','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`createdAt`,`updatedAt`) VALUES ('Amazin Web Store','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`createdAt`,`updatedAt`) VALUES ('Debbies Data Services','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Organizations` (`name`,`createdAt`,`updatedAt`) VALUES ('Trader Petes Code Emporium','2018-06-10 13:22:58','2018-06-10 13:22:58');

INSERT INTO `Followers` (`name`,`phone_number`,`createdAt`,`updatedAt`) VALUES ('Amy Alligator','+11111111111','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`createdAt`,`updatedAt`) VALUES ('Bob Bear','+12222222222','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`createdAt`,`updatedAt`) VALUES ('Charles Coyote','+13333333333','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`createdAt`,`updatedAt`) VALUES ('Delores Dolphin','+14444444444','2018-06-10 13:22:58','2018-06-10 13:22:58');
INSERT INTO `Followers` (`name`,`phone_number`,`createdAt`,`updatedAt`) VALUES ('Edward Eagle','+15555555555','2018-06-10 13:22:58','2018-06-10 13:22:58');

INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is world','final','2018-06-10 13:22:58','2018-06-10 13:22:58',1);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is apple','draft','2018-06-10 13:23:26','2018-06-10 13:23:26',2);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is banana','draft','2018-06-10 13:23:56','2018-06-10 13:23:56',1);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is cucumber','draft','2018-06-10 13:23:56','2018-06-10 13:23:56',4);
INSERT INTO `TextMsgs` (`body`,`status`,`createdAt`,`updatedAt`,`OrganizationId`) VALUES ('test text word is durian','draft','2018-06-10 13:23:56','2018-06-10 13:23:56',1);
