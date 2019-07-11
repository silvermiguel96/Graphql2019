'use strict'

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query{
    hello: String
  }  
`)

//Ejecutar el query Hello
graphql(schema, '{ hello }').then((data) => {
  console.log(data)
})