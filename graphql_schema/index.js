const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');
const Book = require('../modal/Book');
const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        short_description: { type: GraphQLString },
        author: { type: GraphQLString },
        photo: { type: GraphQLString },
        price: { type: GraphQLString }
    })
});

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         origin: { type: GraphQLString },
//         photo: { type: GraphQLString },
//         books: { type: GraphQLList(BookType) }
//     })
// });

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Book.findById(args.id);
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find();
            }
        }
    })
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                short_description: { type: new GraphQLNonNull(GraphQLString) },
                author: { type: new GraphQLNonNull(GraphQLString) },
                photo: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    short_description: args.short_description,
                    author: args.author,
                    photo: args.photo,
                    price: args.price
                });

                const books = await Book.find()
                pubsub.publish('bookAdded', {
                    bookAdded: books
                });
                return book.save();
            }
        },

        updateBook: {
            type: BookType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                short_description: { type: GraphQLString },
                author: { type: GraphQLString },
                photo: { type: GraphQLString },
                price: { type: GraphQLString }
            },
            resolve(parent, { id, name, short_description, author, photo, price }) {
                return Book.findByIdAndUpdate(id, {
                    name,
                    short_description,
                    author,
                    photo,
                    price
                })
            }
        },

        deleteBook: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Book.findByIdAndDelete(args.id);
            }
        }
    })
});

const Subscription = new GraphQLObjectType({
    name: 'Subscription',
    fields: () => ({
        bookAdded: {
            type: GraphQLList(BookType),
            subscribe: () => pubsub.asyncIterator(['bookAdded'])
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation,
    subscription: Subscription
})

module.exports = schema;