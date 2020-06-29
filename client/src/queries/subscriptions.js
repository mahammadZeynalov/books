import gql from "graphql-tag";

export const ADD_BOOK_SUBSCRIPTION = gql`
  subscription bookAdded {
    bookAdded {
        id
        name
        short_description
        author
        photo
        price
    }
  }
`;

export const DELETE_BOOK_SUBSCRIPTION = gql`
subscription bookDeleted {
  bookDeleted {
    id
  }
}`

export const UPDATE_BOOK_SUBSCRIPTION = gql`
subscription bookUpdated {
  bookUpdated {
    id
    name
    short_description
    author
    photo
    price
  }
}`