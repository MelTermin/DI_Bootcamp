import React from 'react'

function BooksList({books}) {
  console.log(books)
  return (
    <div className="main">
        {
    books.map((item) => {
      return (//dont forget to return it//
      <div key= {item.id} className="box">
         <img src= {item.volumeInfo.imageLinks.thumbnail} alt="images"></img>
          
          <p>{item.volumeInfo.title}</p>
          <p>{item.volumeInfo.authors}</p>
          <p>{item.volumeInfo.publishedDate}</p>

      
       
      </div>)
    })
  }
      
    </div>
  )
}

export default BooksList
