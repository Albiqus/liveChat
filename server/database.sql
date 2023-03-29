create table users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    nickname VARCHAR(10) NOT NULL,
    password VARCHAR(30) NOT NULL
);