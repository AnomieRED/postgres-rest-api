const { Client } = require('pg');
const { POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST } = process.env;

const client = new Client({
	user: 'postgres',
	password: POSTGRES_PASSWORD,
	host: POSTGRES_HOST,
	database: POSTGRES_DB,
	port: 5432,
});

client.connect();

module.exports = client;
