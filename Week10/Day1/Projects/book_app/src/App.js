import React from 'react';
import { useState } from 'react';
import Header from './Components/Header'
import Search from './Components/Search';
import './App.css';

function App() {
  const [searchText, setSearchText]= useState ("")
  const [books, setBooks]= useState([])
  const [sorting, setSorting]= useState("")

  
  
  return (
    <div >
     <Header/>
     <Search searchText= {searchText} setSearchText= {setSearchText}
     books= {books} setBooks= {setBooks} sorting= {sorting} setSorting= {setSorting}
    />
    </div>
  );
}

export default App;
