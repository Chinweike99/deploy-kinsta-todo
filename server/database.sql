CREATE DATABASE todoapp;

DROP TABLE IF EXISTS users, todos; 
CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(100),
    title VARCHAR(50),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users(
    email VARCHAR(100) PRIMARY KEY UNIQUE,
    h_password VARCHAR(255)
);

INSERT INTO todos(user_email, title, progress, date)
VALUES('innocent@testgmail.com', 'first todo', 10, 'Fri Aug 09 2024');