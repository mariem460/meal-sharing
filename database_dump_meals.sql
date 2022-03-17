CREATE DATABASE  IF NOT EXISTS `meal-sharing`;
USE `meal-sharing`;
--
-- Table structure for table `meals`
--

DROP TABLE IF EXISTS `meals`;
CREATE TABLE `meals` (
  `idmeals` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `number_of_guests` int(11) DEFAULT NULL,
  PRIMARY KEY (`idmeals`)
) ENGINE=InnoDB AUTO_INCREMENT=6;

CREATE TABLE `reservations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contact_email` VARCHAR(255),
  `contact_name` VARCHAR(255),
  `id_meals` int(10) UNSIGNED NOT NULL,
  `created` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk` FOREIGN KEY (`id_meals`) REFERENCES `meals` (`idmeals`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE Table `reviews`(
 `id` int(10)NOT NULL AUTO_INCREMENT,
 `title` varchar(255),
 `description` text,
 `id_meal` int(10)unsigned NOT NULL,
 `stars` int(10),
 `created_date` date,
  PRIMARY KEY (`id`),
   CONSTRAINT `fk` FOREIGN KEY (`id_meal`) REFERENCES `meals` (`idmeals`) ON DELETE CASCADE
);




--
-- Dumping data for table `meals`
--

LOCK TABLES `meals` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `meals` VALUES (1,'bla bla bla',3),(2,'bla bla bla',3),(3,'asdasd',7),(4,'benjamins karry',10),(5,'oooooooooo',1);
INSERT INTO `reservations`(`contact_email`, `contact_name`, `id_meals`, `created`) 
   values 
   ("ayoub32@yahoo.com",  "ayoub hajjem",1, "2022-6-16"),
   ("mariem122@gmail.com", "mariem oueslati",2,  "2022-7-18"),
   ("sarra92@yahoo.com", "babou ninja",3,  "2022-8-19"),
   ("aabir1232@yahoo.com", "sarrah dragon",4, "2022-10-18"),
   ("hello@yahoo.com","abirx beer",5, "2022-11-20");

/*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;
