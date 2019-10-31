module.exports = {
  type: "sqlite",
  host: "localhost",
  database: "./db",
  logging: false,
  entities: ["src/database/entity/**/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations"
  },
  synchronize: process.env.DEV === "true"
};
