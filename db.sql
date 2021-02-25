DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `person` WRITE;
INSERT INTO `person` VALUES ('Tom','tom@example.com');
UNLOCK TABLES;