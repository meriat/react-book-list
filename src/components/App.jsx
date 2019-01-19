import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BookLogic from './BookLogic';
import { Switch, Route } from 'react-router-dom';
import volumes from '../../FED_Books';
import BookListAtoM from './BookListAtoM';
import BookListNtoZ from './BookListNtoZ';

class App extends React.Component{

  constructor(props){
    super(props);
    let atom = [];
    let ntoz = [];
    volumes.books.forEach(element => { 
      let firstChar = element.volumeInfo.title[0];
      if(firstChar < "N"){
        atom.push(element);
      }
      else{
        ntoz.push(element);
      }
      
    });
    // console.log(atomBooks);
    this.state = {
      atomBooks : atom,
      ntozBooks : ntoz
    };

  }
  render(){
    return (
      <div>
        <style global jsx> {`

        `}
        </style>
        <Header/>
        <BookLogic/>
        <BookListAtoM atomBooks= {this.state.atomBooks}/>
        <BookListNtoZ ntozBooks= {this.state.ntozBooks}/>
        
        <Switch>
        {/* <Route exact path='/'  render={()=><BookListAtoM atomBooks={this.state.atomBooks} /> }/> */}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
