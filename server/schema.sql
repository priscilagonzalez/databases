DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  text VARCHAR(100),
  roomname VARCHAR(20),
  userId INT
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  username VARCHAR(100)
);

ALTER TABLE messages ADD FOREIGN KEY (userId) REFERENCES users (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

