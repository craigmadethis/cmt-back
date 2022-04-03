const path = require('path');
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});



// strapi-api/config/database.js
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'strapi'),
//       user: env('DATABASE_USERNAME', 'strapi'),
//       password: env('DATABASE_PASSWORD', 'strapi'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: env('DATABASE_SSL', false), // For self-signed certificates
//     },
//     debug: false,
//   },
// });
//



// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     },
//     debug: false,
//   },
// });
 
