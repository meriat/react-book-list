import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function BookListNtoZ(props) {
  return (
    <div className="container">
  <h5>Titles N-Z</h5>

        {props.ntozBooks.map((books, index) =>
        <Book imageLink={books.volumeInfo.imageLinks.smallThumbnail}
            title={books.volumeInfo.title}
            author={books.volumeInfo.authors}
            key={index} />
        )}
        <button className="btn">SHOW MORE</button>

    </div>
    
  );
}

BookListNtoZ.propTypes = {
    ntozBooks: PropTypes.array,
  };

export default BookListNtoZ;