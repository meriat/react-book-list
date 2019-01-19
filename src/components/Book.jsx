import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {

  return(
    <div className="container">
       <style jsx>{`
        p{
          font-size: small;
          margin-bottom:0;
        }
        .card-body{
            padding-left: 0;
        }
        img{
            border-radius: 10%;
            height: 2000px;
        }
        .row{
            float: left;
            display: block;
        }
        .card{
            width: 180px;
            height: 300px;
            border: 0;
        }
        .col-md-4{
            margin-right: 30px;
        }
      `}
      </style>
      <div className="row">

        <div className="col-md-4">

        <div className="card">
          <img className="card-img-top" src={props.imageLink} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"><b>{props.title}</b></p>
            <p className="card-text">By {props.author}</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;