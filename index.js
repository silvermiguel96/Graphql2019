'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express')
const gqlmiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000

const schema = buildSchema(`
  type Query{
    hello: String
  }  
`)

// Configurar los resolves
const resolvers = {
  hello: () => {
    return  'Hola mundo'
  }
}

app.use('/api', gqlmiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`serveris listening at http://localhost:${port}/api`)
})