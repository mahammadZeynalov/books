require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./graphql_schema');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.APP_PORT

app.listen(PORT, () => console.log('The server is running on port ', PORT))


