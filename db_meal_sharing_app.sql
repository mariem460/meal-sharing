use heroku_58273f993aa1584;
SET NAMES utf8mb4;

CREATE Table `Meal`(
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` text,
    `location` varchar(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` int(10),
    `price` decimal(10,3) NOT NULL,
    `created_date` DATE,
    PRIMARY KEY (`id`)
);
CREATE TABLE `Reservation`(
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `number_of_guests` int(10),
    `meal_id` int(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` varchar(100),
    `contact_name` varchar(255),
    `contact_email` varchar(255),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
);
CREATE Table `Review`(
 `id` int(10)NOT NULL AUTO_INCREMENT,
 `title` varchar(255),
 `description` text,
 `meal_id` int(10)unsigned NOT NULL,
 `stars` int(10),
 `created_date` date,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
);

INSERT INTO `Meal`(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
   values 
    ("coscous", "Couscous is a tiny pasta made of wheat or barley. Although couscous was traditionally hand-rolled, these days it is made by machine", "Tunisia", "2022-6-15 9:18:16 ", 10, 10.4, "2016-2-25"),
    ("pizza", "dish of Italian origin consisting of a flattened disk of bread dough topped tomato", "Italy", "2022-7-15  10:18:16", 10, 16.2, "2010-10-25"),
    ("butter lamp", "traditional butter sculpture accompanying the Easter meal for many Russian, hand or in a lamb-shaped mold.", "India", "2022-8-15  11:18:16", 10, 70.5, "2019-10-25"),
    ("croissant", "A croissant is a laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture.", "france", "2022-10-15  12:18:16", 10, 11, "2016-10-25" ),
    ("pasta", "dish of Italian origin consisting of a flattened disk of bread dough topped tomato", "London", "2022-11-15  10:18:16", 10, 82.7, "2021-10-25");
    
INSERT into `Review`(`title`, `description`, `meal_id`, `stars`, `created_date`)
values 
    ("good", "The place is beautiful and staff are super friendly and the food is delicious. I love that you get a lot of food as well for the price.", 2, 5, "2022-7-19" ),
    ("very good", "The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing", 1, 5, "2022-10-19"),
    ("bad", "I would leave zero stars if I could", 3, 1, "2022-6-17"),
    ("the worst", "Sleepy service poor food quality and when we asked why it was like this they stated that their kitchen was backed up yet the restaurant was damn near empty.", 4, 1, "2022-8-20"),
    ("amazing", "The food is absolutely amazing everything we tasted melted in other mouths.", 5, 5, "2022-11-22" );
    
INSERT INTO `Reservation`(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
   values 
   (5, 3, "2022-6-16", "+216 54635731", "ayoub hajjem", "ayoub32@yahoo.com"),
   (6, 2, "2022-7-18", "+33 54628982", "mariem oueslati", "mariem122@gmail.com"),
   (2, 4, "2022-8-19", "+91 54731635", "babou ninja", "babou12@hotmail.com"),
   (8, 1, "2022-10-18", "+32 54635731", "sarrah dragon", "sarra92@yahoo.com"),
   (2, 1, "2022-11-20", "+20 54731635", "abirx beer", "aabir1232@yahoo.com");
   
  
    

