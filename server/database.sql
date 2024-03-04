CREATE DATABASE todo_database;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, // SERIAL is used to auto increment the value
    description VARCHAR(255)
);