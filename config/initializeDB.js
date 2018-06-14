var connection = require('./connection.js');

var initializeDB = function() {
var initDB = [
  'DROP DATABASE IF EXISTS chimeDB',
  'CREATE DATABASE chimeDB',
  'USE chimeDB',
  'CREATE TABLE organizations (id INT NOT NULL AUTO_INCREMENT, username VARCHAR(70) NOT NULL, title VARCHAR(140), phone VARCHAR(20), PRIMARY KEY (id))',
  'CREATE TABLE followers (id INT NOT NULL AUTO_INCREMENT, username VARCHAR(70)  NOT NULL, title VARCHAR(140), phone VARCHAR(20), PRIMARY KEY (id))',
  'CREATE TABLE organizations_followed (id INT NOT NULL AUTO_INCREMENT, follower VARCHAR(70) NOT NULL, organization VARCHAR(70) NOT NULL, PRIMARY KEY (id))',
  'CREATE TABLE organization_texts (id INT NOT NULL AUTO_INCREMENT, organization VARCHAR(70) NOT NULL, message TEXT, createdAt DATETIME, PRIMARY KEY (id))',
  'CREATE TABLE follower_texts (id INT NOT NULL AUTO_INCREMENT, follower VARCHAR(70) NOT NULL, to_organization VARCHAR(70) NOT NULL, message TEXT, createdAt DATETIME, PRIMARY KEY (id))'
];
initDB.forEach(function(queryVal) {
  connection.query(queryVal, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});

var seedDB = [
  `INSERT INTO followers (username, title, phone) VALUES ("matt", "Matthew Buchanan", "${process.env.PHONE_1}")`,
  `INSERT INTO followers (username, title, phone) VALUES ("steve", "Steve Yurchuck", "${process.env.PHONE_2}")`,
  `INSERT INTO organizations (username, title, phone) VALUES ("bait", "Bobs Bait and Web Services", "${process.env.PHONE_MAIN}")`,
  `INSERT INTO organizations (username, title, phone) VALUES ("amazin", "Amazin Web Store", "${process.env.PHONE_MAIN}")`,
  `INSERT INTO organizations (username, title, phone) VALUES ("trader", "Trader Petes Code Emporium", "${process.env.PHONE_MAIN}")`  
];

seedDB.forEach(function(queryVal) {
  connection.query(queryVal, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});
}

module.exports = initializeDB;

