let mysql2 = require("mysql2");
let dbConnection = mysql2.createPool({
	user: process.env.USER,
	database: process.env.DATABASE,
	host: "localhost",
	password: process.env.PASSWORD,
	connectionLimit: 10,
});

module.exports = dbConnection.promise();
