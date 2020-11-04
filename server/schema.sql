/*CREATE DATABASE chat; */

USE chat;
DROP TABLE IF EXISTS `Messages`;
CREATE TABLE `Messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Message` VARCHAR(300) NOT NULL DEFAULT 'a msg',
  `User ID` INTEGER NOT NULL DEFAULT 0,
  `Room ID` INTEGER NOT NULL,
  `Time Posted` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT  ,
  `Username` VARCHAR(300) NULL DEFAULT 'username',
  PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `Rooms`;
 CREATE TABLE `Rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Room Name` VARCHAR(300) NOT NULL DEFAULT 'room name',
  PRIMARY KEY (`id`)


);
DROP TABLE IF EXISTS `Friends`;
CREATE TABLE `Friends` (
  `id` INTEGER NOT NULL AUTO_INCREMENT ,
  `User ID` INTEGER NOT NULL,
  `Friend ID` INTEGER NOT NULL,
  PRIMARY KEY (`id`),
KEY (`id`)
);

ALTER TABLE `Messages` ADD CONSTRAINT FOREIGN KEY (User ID) REFERENCES `Users` (`id`);
-- ALTER TABLE `Messages` ADD FOREIGN KEY (Room ID) REFERENCES `Rooms` (`id`);
-- ALTER TABLE `Friends` ADD FOREIGN KEY (Friend ID) REFERENCES `Users` (`id`);




/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

