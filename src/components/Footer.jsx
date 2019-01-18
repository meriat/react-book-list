import React from 'react';

function Footer(){
  return (
    <div className="container-fluid">
      <style jsx>{`
      .container-fluid{
        background-color: #d7dae0;
        position: fixed;
        left: 0;
        bottom: 0;
      }
      li{
          list-style-type: none;
          color: gray;
      }
      p{
          padding-left: 100px;
      }
      .row{
          padding: 1em 1em 1em 0em;
      }

      `} </style>
      <div className="row">
        <div className="col-3">
            <p className="bg">Assemble Books</p>
        </div>

        <div className="col-3">
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>

        <div className="col-3">
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>

        <div className="col-3">
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>

      </div>
    </div>
  );
}

export default Footer;
