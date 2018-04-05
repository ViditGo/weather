import React from 'react';
import BooksList from '../containers/books_list';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BooksList />
      </div>
    );
  }
}
