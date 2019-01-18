import React from 'react';

function Header(){
  return (
    <div>
      <style jsx>{`
      .bg{
        background-color: #d7dae0;
        height: 50px;
        padding-left: 100px;
        padding-top: 0.7em;
      }

      `} </style>
    <p className="bg">Assemble Books</p>
    </div>
  );
}

export default Header;
