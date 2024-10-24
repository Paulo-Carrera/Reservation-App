/** Database for lunchly */
require("dotenv").config();
const pg = require("pg");

const db = new pg.Client(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

db.connect();

module.exports = db;
