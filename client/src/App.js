import React from 'react';
import Books from './components/Books';
import { GET_BOOKS_QUERY } from './queries/queries';
import { ADD_BOOK_SUBSCRIPTION, DELETE_BOOK_SUBSCRIPTION } from './queries/subscriptions';
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
            return {
              books: [newFeedItem, ...prev.books]
            };
          }
        })
      }

      subscribeAfterBookDeleted={() =>
        subscribeToMore({
          document: DELETE_BOOK_SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const newFeedItem = subscriptionData.data.bookDeleted;
            return {
              books: prev.books.filter(book => book.id != newFeedItem.id)
            };
          }
        })}
    />
  );
}

export default App;
