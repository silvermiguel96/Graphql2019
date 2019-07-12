'use strict'

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query{
    hello: String
    saludo: String
  }  
`)

// Configurar los resolves
const resolvers = {
  hello: () => {
    return  'Hola mundo'
  },
  saludo: () => {
    return 'Seguimos aprendiendo'
  }
}

//Ejecutar el query Hello
graphql(schema, '{ saludo }', resolvers).then((data) => {
  console.log(data)
})