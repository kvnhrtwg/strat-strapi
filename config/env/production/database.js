const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = () => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "db-postgresql-fra1-19862-do-user-10091953-0.b.db.ondigitalocean.com",
        port: "25060",
        database: "defaultdb",
        username: "doadmin",
        password: "5MKUMWJ14SJhfgWE",
        ssl: {
          rejectUnauthorized: true,
        },
      },
      options: {},
    },
  },
});
