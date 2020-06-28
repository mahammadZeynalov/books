import React from 'react';
import Books from './components/Books';
import { GET_BOOKS_QUERY } from './queries/queries';
import { ADD_BOOK_SUBSCRIPTION } from './queries/subscriptions';
import { useQuery } from 'react-apollo';

function App() {

  const { subscribeToMore, ...result } = useQuery(
    GET_BOOKS_QUERY
  );

  return (
    <Books
      {...result}
      subscribeToNewBooks={() =>
        subscribeToMore({
          document: ADD_BOOK_SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const newFeedItem = subscriptionData.data.bookAdded;
            console.log(newFeedItem);
            console.log(prev);
            return Object.assign({}, prev, {
              books: [newFeedItem, ...prev.books]
            });
          }
        })
      }
    />
  );
}

export default App;
