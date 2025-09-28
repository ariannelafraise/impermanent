const pgp = require('pg-promise')

const db = pgp('postgres://impermanent-dev:test123@localhost:5432/impermanent-dev')

db.none('CREATE TABLE', 123)
