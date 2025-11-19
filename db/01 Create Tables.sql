CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    login_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE card (
    card_id INT PRIMARY KEY AUTO_INCREMENT,
    card_set CHAR(3),
    card_subset_id INT,
    card_name VARCHAR(100),
    color CHAR(1),
    card_type VARCHAR(50),
    subset_num INT,
    rarity CHAR(1)
);

CREATE TABLE card_subset (
    card_subset_id INT PRIMARY KEY AUTO_INCREMENT,
    set_name VARCHAR(100),
    release_date DATE,
    total_cards INT
);

CREATE TABLE user_card (
    user_card_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    card_id INT,
    quantity INT
);