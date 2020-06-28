require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./graphql_schema');
const { ApolloServer } = require('apollo-server');

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

let server = new ApolloServer({ schema, tracing: true });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});


