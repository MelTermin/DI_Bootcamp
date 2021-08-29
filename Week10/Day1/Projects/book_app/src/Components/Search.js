import axios from 'axios';
import {useEffect} from 'react'
import BookList from './BooksList'

const Search = ({searchText,setSearchText,setBooks,books,sorting,setSorting})=> {
  console.log(sorting)
  
  const handleSort= (e)=> {
    setSorting(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchText+"&key=AIzaSyCm2m8B2lbdf0950uVaxNoP02XRxn0X0xM&maxResults=10")
    .then(data => {
    console.log(data.data.items);
    setBooks(data.data.items)
    setSearchText("")
    })
  }

 

  // useEffect(() => {
  //   let sortedBooks= books.sort((a,b) => {
  //     if(sorting === 'Newest'){
       
  //       return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
  //   }
  //   else if(sorting === 'Oldest'){
  //       return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
  //   }
  // 
  //   })
  // setBooks(sortedBooks)
  // }, [setBooks]);
  // console.log(sortedBooks)

  useEffect(() => {
    const sortedBooks = [...books];
    console.log(sortedBooks)
   
  });


  return (
    <div>
      <input type="text" onChange= {(e) =>setSearchText(e.target.value)}></input>
      <button onClick= {handleSubmit}>Search</button>
      <select onChange= {handleSort}>
        <option disabled selected>Sort</option>
        <option>Newest</option>
        <option>Oldest</option>
      </select>
      <BookList books= {books} setBooks= {setBooks}></BookList>
    </div>
  )
  }
  
  export default Search
