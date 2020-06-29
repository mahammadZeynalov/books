import gql from 'graphql-tag';

export const ADD_BOOK_MUTATION = gql`
mutation AddBook($name: String!, $author: String!, $short_description: String!, $price: String!, $photo: String!) {
    addBook(name: $name, short_description: $short_description, author: $author, photo: $photo, price: $price) {
        name
    }
}`

export const DELETE_BOOK_MUTATION = gql`
mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
        name
    }
}`

export const UPDATE_BOOK_MUTATION =gql`
mutation UpdateBook($id: ID!, $name: String!, $author: String!, $short_description: String!, $price: String!, $photo: String!) {
    updateBook(id: $id, name: $name, short_description: $short_description, author: $author, photo: $photo, price: $price) {
        id
        name
        short_description
        author
        photo
        price
    }
}`