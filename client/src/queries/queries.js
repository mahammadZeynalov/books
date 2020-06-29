import gql from 'graphql-tag';

export const GET_BOOK_QUERY = gql`
query RootQueryType($id: ID!) {
    book(id: $id) {
        id
        name
        short_description
        author
        photo
        price
    }
}`

export const GET_BOOKS_QUERY = gql`

    query RootQueryType {
        books{
            id
            name
            short_description
            author
            photo
            price
        }
    }
`