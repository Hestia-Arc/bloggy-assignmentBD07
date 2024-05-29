const { MongoClient } = require('mongodb')

let host = process.env.DB_HOST;

let port = process.env.DB_PORT;

let protocol = process.env.DB_CONNECTION;

let databaseName = process.env.DB_DATABASE;

if (! host || ! port || ! protocol || ! databaseName) {
    throw new Error('One or more required environment variables (DB_HOST, DB_PORT, DB_CONNECTION, DB_DATABASE) are missing or empty.');
}

// // The MongoDB connection string for a local server would typically take the form of mongodb://localhost:27017/<database>,
// //  where <database> is the name of the database you want to connect to. If you are using a different port for MongoDB,
// //  you should replace 27017 with the port number you are using.
let databaseString = `${protocol}://${host}:${port}`

const client = new MongoClient(databaseString);

async function connect(collection) {
    try {
        const connection = await client.connect();

        const db = connection.db(databaseName)

        return db.collection(collection)
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`)

        throw error;
    }
}

module.exports = {
    connect
};
