create table users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    password VARCHAR(30) NOT NULL
);
