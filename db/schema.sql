DROP DATABASE IF EXISTS chimeDB;
CREATE DATABASE chimeDB;

USE chimeDB;

CREATE TABLE organizations (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(70) NOT NULL,
  title VARCHAR(140),
  phone VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE followers (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(70) NOT NULL,
  title VARCHAR(140),
  phone VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE organizations_followed (
  id INT NOT NULL AUTO_INCREMENT,
  follower VARCHAR(70) NOT NULL,
  organization VARCHAR(70) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE organization_texts (
  id INT NOT NULL AUTO_INCREMENT,
  organization VARCHAR(70) NOT NULL,
  message TEXT,
  createdAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE follower_texts (
  id INT NOT NULL AUTO_INCREMENT,
  follower VARCHAR(70) NOT NULL,
  to_organization VARCHAR(70) NOT NULL,
  message TEXT,
  createdAt DATETIME,
  PRIMARY KEY (id)
);




