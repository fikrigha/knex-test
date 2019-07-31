require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const graphQLHTTP = require('express-graphql')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql')

const DB = new Pool({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const UserType = new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    id: { type: GraphQLInt, resolve: ({id}) => id },
    name: { type: GraphQLString, resolve: ({name}) => name },
  })
})

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      users: {
        type: GraphQLList(UserType),
        resolve: () => DB.query('SELECT * FROM _user').then(({rows}) => rows)
      }
    })
  })
})

const server = express()
server.use('/graphql', graphQLHTTP({ Schema, graphiql: true}))
server.listen(process.env.PORT, () => console.log('Listening on PORT: ', process.env.PORT))
