create database ejemplobd;

use ejemplobd;

create table customer(
    id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    namee VARCHAR(15) NOT NULL,
    addres VARCHAR(20) NOT NULL,
    phone VARCHAR(15)
);