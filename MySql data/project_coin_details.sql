-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coin_details`
--

DROP TABLE IF EXISTS `coin_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coin_details` (
  `coin_id` int NOT NULL AUTO_INCREMENT,
  `issuing_country` varchar(255) NOT NULL,
  `composition` varchar(255) NOT NULL,
  `quality` varchar(255) NOT NULL,
  `denomination` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `weight` varchar(255) NOT NULL,
  `back_image` varchar(255) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `currency_symbol` varchar(255) NOT NULL,
  `weight_symbol` varchar(255) NOT NULL,
  PRIMARY KEY (`coin_id`),
  CONSTRAINT `FK_CoinsCoinDescription` FOREIGN KEY (`coin_id`) REFERENCES `coins` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coin_details`
--

LOCK TABLES `coin_details` WRITE;
/*!40000 ALTER TABLE `coin_details` DISABLE KEYS */;
INSERT INTO `coin_details` VALUES (1,'the Republic of Vietnam','nickel','BU','1 dong',1955,'5.05','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/South%20Vietnamese%20Dong_2.png?alt=media&token=49c9b296-f1e8-4188-9854-e7503a97a0c8','56','$','g'),(2,'British South Africa','gold','BU','1/2 pound',1952,'6.3','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/The%20British%20Antelope_2.png?alt=media&token=25bdd2a1-d23b-4699-a594-ffed850a9913','78','$','g'),(3,'Estonia','gold','BU','1/2 pound',1934,'5.67','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Cron_2.png?alt=media&token=7227462f-05bd-4686-8a63-95346a9b492c','79','$','g'),(4,'the Belgian Congo','gold','BU','2 francs',1947,'5.45','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Franc_2.png?alt=media&token=51e0dcf5-c7e2-4a8d-b356-06a50728b611','68','$','g'),(5,'France','steel','BU','2 francs',1997,'6.57','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Stork_2.png?alt=media&token=c2888647-9b39-4dd6-b82c-c6ac1f2172e4','54','$','g'),(6,'Australia','gold','BU','1 dollar',1984,'4.76','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Gyeonggi_2.png?alt=media&token=8a787c7c-e116-4de1-a183-dd31f304fe6b','97','$','g'),(7,'Bolivia','steel','BU','1 PESO',1988,'3.62','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Bolivian%20Peso_2.png?alt=media&token=00bdfdef-6b1d-48e3-ab61-918967b4c011','54','$','g'),(8,'Botswana','steel','BU','1 thebe',1976,'4.28','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Botswana_2.png?alt=media&token=809b214a-a773-495c-8d82-e84c5d4853e8','62','$','g'),(9,'British Virgin Islands','nickel','BU','5 dollars',2014,'6.98','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Virginia_2.png?alt=media&token=2fec6fe9-a2a9-4b52-b263-7bee0be94256','108','$','g'),(10,'Ghana','steel','BU','20 pesewas',1962,'4.76','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Theobroma%20Cocoa_2.png?alt=media&token=c9e7f92e-013e-4d22-a548-6b63ff2063a3','54','$','g'),(11,'the Weimar Republic','silver','BU','5 Mark',1927,'4.76','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Coin%20of%20the%20Weimar%20Republic_2.png?alt=media&token=fed62237-ef9b-49a3-a995-48b3520af6ea','142','$','g'),(12,'Egypt','silver','BU','1 pound',1981,'3.95','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Scientist_2.png?alt=media&token=040e17d6-5033-4d02-b51e-41f8fa236875','112','$','g'),(13,'India','steel','BU','1 rupee',1975,'4.95','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Lion%20sedge_2.png?alt=media&token=3ea32d92-fb10-4b47-b271-37d9d6c9ee16','76','$','g'),(14,'Iran','silver','BU','5000 dinars',1928,'6.12','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Rial_2.png?alt=media&token=1c6d0f03-15de-44f0-a8b5-8d84b2368493','98','$','g'),(15,'Iceland','nickel','BU','1 Icelandic krona',2007,'5.42','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/ISK_2.png?alt=media&token=fbe8db55-7c84-45e8-a205-69ea97519646','78','$','g'),(16,'Yemen','nickel','BU','25 fils',1964,'5.47','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Yemen_2.png?alt=media&token=80cc5599-2dc8-486c-b8bd-9a061872a0ee','69','$','g'),(17,'China','nickel','BU','1 yuan',1986,'6.02','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Woman_2.png?alt=media&token=13026a6d-e43e-4d01-94c5-0939ae94f6f6','48','$','g'),(18,'China','nickel','BU','5 yuan',1998,'7.24','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Alligatorv_2.png?alt=media&token=1e2f81af-8803-4f5d-be7d-27a58cb1e07c','78','$','g'),(19,'China','nickel','BU','5 yuan',1993,'7.24','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/The%20Golden%20Panda_2.png?alt=media&token=68942de7-c9a1-4d8a-af79-362fd67ff0a4','82','$','g'),(20,'Costa Rica','nickel','BU','100 columns',1974,'5.24','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Costa%20Rica_2.png?alt=media&token=17b56954-188c-466d-af28-c48408ec76e4','78','$','g'),(21,'Costa Rica','nickel','BU','100 columns',1979,'5.24','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Year%20of%20the%20children_2.png?alt=media&token=8c508d1c-c56c-41f1-b5f2-bb8cb17d9c07','72','$','g'),(22,'Portugal','silver','BU','5 escudos',1933,'4.4','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Sailboat_2.png?alt=media&token=15ab9546-3ce6-4ee8-be76-28d93aa5c174','134','$','g'),(23,'CANADA','nickel','BU','5 cents',1965,'4.54','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Canadian%20Beaver_2.png?alt=media&token=8e3ae03a-7c04-4cab-8e13-f59537b86b51','40','$','g'),(24,'CANADA','gold','BU','1 dollar',1970,'5.4','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Looney_2.png?alt=media&token=a9fcaec8-6de4-4cb4-a43e-6f79a54dee1b','65','$','g'),(25,'UNITED STATES OF AMERICA','nickel','BU','5 cents',1966,'3.54','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Jefferson_2.png?alt=media&token=340b94f4-e1a1-4574-90c0-95f548f6460c','35','$','g'),(26,'UNITED STATES OF AMERICA','nickel','BU','HALF DOLLAR',1963,'4.3','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Kennedy_2.png?alt=media&token=b6769cf5-3863-4763-82ef-ab1d63053419','43','$','g'),(27,'CANADA','Steel','BU','1 cent',1965,'2.7','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Canadian%20Cent_2.png?alt=media&token=1d1183a6-979f-4c70-bb72-86985e2bf385','8','$','g'),(28,'UNITED STATES OF AMERICA','Steel','BU','1 cent',1793,'5.1','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/A%20penny_2.png?alt=media&token=a285349f-089f-4ae2-8a52-74872ae40982','8','$','g'),(29,'CANADA','nickel','BU','25 cents',1966,'5.7','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/25%20cents_2.png?alt=media&token=4d51099b-0d99-4acc-9e60-79ca5fe295a5','80','$','g'),(30,'UNITED STATES OF AMERICA','nickel','BU','10 cents',1946,'4.25','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Dim%20Sum_2.png?alt=media&token=cb5e7e99-6e24-40c7-ad4b-c4d016b2185d','10','$','g');
/*!40000 ALTER TABLE `coin_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-10 17:49:21
