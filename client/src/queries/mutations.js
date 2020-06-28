import gql from 'graphql-tag';

export const ADD_BOOK_MUTATION = gql`
mutation AddBook($name: String!, $author: String!, $short_description: String!, $price: String!, $photo: String!) {
    addBook(name: $name, short_description: $short_description, author: $author, photo: $photo, price: $price) {
        name
    }
}`