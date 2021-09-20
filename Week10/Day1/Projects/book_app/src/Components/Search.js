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


  useEffect(() => {
    const sortedBooks = [...books];
    sortedBooks.sort (function (a,b) {
      return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate)

    })
  setBooks(sortedBooks)
  },[sorting]);

  return (
    <div >
      <div className="search-container">
      <input type="text" onChange= {(e) =>setSearchText(e.target.value)}></input>
      <button onClick= {handleSubmit}>Search</button>
      <select onChange= {handleSort}>
        <option disabled selected>Sort</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
    

       <BookList books= {books} setBooks= {setBooks}></BookList>
   
   </div>
  )
  }
  
  export default Search
