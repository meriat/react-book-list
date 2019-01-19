import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function BookListAtoM(props) {
  return (
    <div className="container">
     <style jsx>{`
        button{
                display: flex;
                align-items: center;
                justify-content: center;
              
        }
      `}
      </style>
  <h5>Titles A-M</h5>

        {props.atomBooks.map((books, index) =>
        <Book imageLink={books.volumeInfo.imageLinks.smallThumbnail}
            title={books.volumeInfo.title}
            author={books.volumeInfo.authors}
            key={index} />
        )};
        <br/>
        <button className="btn">SHOW MORE</button>
    
    </div>
    
  );
}

BookListAtoM.propTypes = {
    atomBooks: PropTypes.array,
  };

export default BookListAtoM;