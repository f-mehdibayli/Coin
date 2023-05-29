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
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_CategoriesCoins` (`category_id`),
  CONSTRAINT `FK_CategoriesCoins` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,1,'South Vietnamese Dong','Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/South%20Vietnamese%20Dong_1.png?alt=media&token=f74cdc2e-16b1-4f87-bdda-b7e7965cd4e3'),(2,1,'The British Antelope','Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/The%20British%20Antelope_1.png?alt=media&token=5fe0add2-9bad-4201-95e4-cd8aecba59ac'),(3,1,'Cron','A unique coin depicting a Knorr Viking ship at sea.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Cron_1.png?alt=media&token=209c1b82-f219-4d0f-b7bf-1e50c6e47689'),(4,1,'Franc','Unique coin with the image of a walking elephant. \"Frank\" of the Belgian Congo.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Franc_1.png?alt=media&token=e3d8dfa1-4acb-45cb-a3ff-70fad7792029'),(5,1,'Stork','Unique coin with the image of a flying stork. French coin at 2 two francs 1997.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Stork_1.png?alt=media&token=a8bc1e99-eee7-4a6a-a8ea-aa9bf8a1e89a'),(6,1,'Gyeonggi','\"Gyeonggi\". Coin with the image of five kangaroos - symbols of Australia.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Gyeonggi_1.png?alt=media&token=0ae1f925-da4d-481b-a5f2-85ca7a62b74d'),(7,1,'Bolivian Peso','Boliviano Coin with the image of Bolivia.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Bolivian%20Peso_1.png?alt=media&token=d181db8d-1419-4a3c-9230-f780ac917233'),(8,1,'Botswana','\"Botswana\". Coin with the image of a bird.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Botswana_1.png?alt=media&token=eb364ac2-216c-42fa-a719-b36c92010998'),(9,1,'Virginia','Virginia Coin with the image of a seahorse. Coin created during the reign of Elizabeth II.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Virginia_1.png?alt=media&token=5d5db8c3-2651-4ef0-857f-e19c2c823ffd'),(10,1,'Theobroma Cocoa','Coin with a lion in the center of the shield. Ghana coin, published in 1967.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Theobroma%20Cocoa_1.png?alt=media&token=0cd3f813-09eb-4b94-9863-78b31a509842'),(11,1,'Coin of the Weimar Republic','The Hindenburg Coin with the coat of arms of the Weimar Republic.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Coin%20of%20the%20Weimar%20Republic_1.png?alt=media&token=697da09a-a576-45fb-855a-2ea3f2d5fe6a'),(12,1,'Scientist','Silver Egyptian coin with the image of the god Thoth. Silver Egyptian coin.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Scientist_1.png?alt=media&token=ca7e6394-f298-43d8-bab5-36f289d44d8b'),(13,2,'Lion sedge','Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Lion%20sedge_1.png?alt=media&token=93f8a42c-514c-4eec-8ac3-cfaac2fe09bb'),(14,2,'Riale','Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Rial_1.png?alt=media&token=d02e1efb-6979-40a7-9717-475f460daf06'),(15,2,'ISK','Icelandic coin with a picture of a fish. Face value 1 Icelandic krona','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/ISK_1.png?alt=media&token=b5faf365-5b29-4aa5-98d8-b55b3b703201'),(16,2,'Yemen','Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Yemen_1.png?alt=media&token=08c1aacb-f570-44f1-bd36-744bc40173be'),(17,2,'Woman','1 yuan Chinese coin with a picture of a woman. 1986 edition.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Woman_1.png?alt=media&token=3e74303d-9387-46f7-be24-86053264e82e'),(18,2,'Alligator','Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Alligator_1.png?alt=media&token=f6524180-3158-4d02-b170-6d35db4ff637'),(19,2,'The Golden Panda','Chinese coin with the image of two pandas. 5 yuan Chinese coin. 1993 edition.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/The%20Golden%20Panda_1.png?alt=media&token=298ec739-0bb8-43e5-bfe8-900d79196767'),(20,2,'Costa Rica','Costa - African coin with the image of manatee. Costa Rican coin of 100 columns. It has been produced since 1974.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Costa%20Rica_1.png?alt=media&token=a1282beb-9a3b-46da-8eb8-28883464865f'),(21,2,'Year of the children','Costa is an African coin depicting three chicks in a nest. Costa Rican coin of 100 columns. It has been produced since 1979.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Year%20of%20the%20children_1.png?alt=media&token=85beda96-5c92-4016-a025-79311bafc795'),(22,2,'Sailboat','Portuguese silver coin with the image of a sailing ship. ','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Sailboat_1.png?alt=media&token=c43bfca8-59e2-45c5-8ded-d03aabdd00fa'),(23,3,'Canadian Beaver','\"Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Canadian%20Beaver_1.png?alt=media&token=651e8100-8290-47df-aa9c-4c93d75c245b'),(24,3,'Looney','\"Looney\". Unique coin with the image of a goat. Canadian dollar symbol.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Looney_1.png?alt=media&token=11452e19-2bf6-4570-ac46-483df394b3ed'),(25,3,'Jefferson','Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Jefferson_1.png?alt=media&token=81c86494-b0c6-4cc5-986c-7939e4f7e8e1'),(26,3,'Kennedy','The unique coin is made in honor of the assassination of the 35th president of Texas.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Kennedy_1.png?alt=media&token=25caa6e4-27ab-44d1-84f7-acff77306382'),(27,3,'Canadian Cent','\"Canadian cent.\" A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Canadian%20Cent_1.png?alt=media&token=40efc0b1-29d4-482d-bd09-af7e1ca40031'),(28,3,'A penny','\"A penny\". A unique coin with a shield image with 13 vertical stripes.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/A%20penny_1.png?alt=media&token=98dbffd2-37d1-4537-9abe-baf5029030c9'),(29,3,'25 cents','Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/25%20cents_1.png?alt=media&token=cc722115-9f0b-46c1-ab1b-340c9a779fa1'),(30,3,'Dim Sum','Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present. This is a unique coin with the image of a torch, oak and olive branches.','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/Dim%20Sum_1.png?alt=media&token=2bee407a-e64f-45e2-ae49-0f4f64262801'),(42,3,'50 coins','Dövriyyədə olan yeganə bikolor sikkə – 50 qəpiklik sikkələr latun və nikellə örtülmüş ikirəngli – qızılı və gümüşü rəngdədir[1]. Yan tərəfləri fərdi üsulla hazırlanmışdır','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/50%20cent_1.png?alt=media&token=674d30e2-9d5a-4189-92d5-de062d31467c'),(65,2,'20 qepik','Azerbaijan about ','https://firebasestorage.googleapis.com/v0/b/finalproject-c5cc8.appspot.com/o/20%20coin_2.jpg?alt=media&token=bb0034e7-166d-475a-94c6-97bd3bc19de6');
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-28 14:40:46
