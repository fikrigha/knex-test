# Knex Test

## Objective
To test db migration using Knex.js.

## Tools
dotenv - To define environment variables inside a file called .env.

## Creating a migration file
```
npx knex migrate:make [insert_migration_name]
```

## Run latest migration
```
npx run.env knex migrate:latest
```

## Up and Down functions in your migration files
- exports.up() -> db update happens inside this function
- exports.down() -> code to cancel your db update
