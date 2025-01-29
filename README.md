## connect postgres database

psql -d postgres -U postgres(user name)
#password for user 'postgres' is 'password'
sudo -i -u postgres
\q: Exit psql connection
\c: Connect to a new database
\dt: List all tables
\du: List all roles
\list: List databases
\x : table data show nice
for products table in cmd

# SET CLIENT_ENCODING TO 'utf8';

## postgres# CREATE DATABASE gtaa

## connect database
psql -d demo_database

\c gtaa

## create table

gtaa=#
CREATE TABLE users (
ID SERIAL PRIMARY KEY,
name VARCHAR(30),
email VARCHAR(30)
);
#insert data in

### how to install nodemon for autorefresh

#npm install -g nodemon
#npm install --save-dev nodemon
#"scripts": {"start": "nodemon app.js"}
#npm start
#nano controllers/customers.js
