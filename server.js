const mongoose = require('mongoose');
const schema = require('./graphql_schema');
const { ApolloServer } = require('apollo-server');

const db = 'mongodb://dbAdmin:dbAdmin123@cluster0-shard-00-00-rfrav.gcp.mongodb.net:27017,cluster0-shard-00-01-rfrav.gcp.mongodb.net:27017,cluster0-shard-00-02-rfrav.gcp.mongodb.net:27017/BooksStore?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

let server = new ApolloServer({ schema, tracing: true });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});


