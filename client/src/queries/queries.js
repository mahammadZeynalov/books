import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

export default () => useQuery(GET_BOOKS_QUERY);