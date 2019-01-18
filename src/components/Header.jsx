import React from 'react';

function Header(){
  return (
    <div className="container-fluid">
      <style jsx>{`
      .container-fluid{
        background-color: #d7dae0;
        height: 50px;
      }
      .bg{
        
        padding-left: 100px;
        padding-top: 0.7em;
      }

      `} </style>
    <p className="bg">Assemble Books</p>
    </div>
  );
}

export default Header;
