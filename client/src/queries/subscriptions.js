import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

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

export default () => useSubscription(ADD_BOOK_SUBSCRIPTION);