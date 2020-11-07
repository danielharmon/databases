/*CREATE DATABASE chat; */

USE chat;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER AUTO_INCREMENT,
  `message` VARCHAR(300) ,
  `user_id` INTEGER ,
  `room_id` INTEGER ,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(300) UNIQUE,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rooms'
--
-- ---

DROP TABLE IF EXISTS `Rooms`;

CREATE TABLE `Rooms` (
  `id` INTEGER  AUTO_INCREMENT,
  `roomname` VARCHAR(300) UNIQUE,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (room_id) REFERENCES `Rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`text`,`user id`,`room id`) VALUES
-- ('','','','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`roomname`) VALUES
-- ('','');