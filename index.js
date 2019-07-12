'use strict'

const { makeExecutableSchema } = require('graphql-tools');
const express = require('express')
const gqlmiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

const typeDefs =  readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers})

app.use('/api', gqlmiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`
serveris listening at http: //localhost:${port}/api`)
})