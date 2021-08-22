const PostList = (props)=> {
  const {details}=props
  return (
    <div>
     {
       details.map((items)=> {
        return (
          <div>
          <h1>{items.title}</h1>
          <p>{items.content}</p>
          <p>{items.slug}</p>
          </div>
        )
       })
     }
    </div>
  )
  }
  
  export default PostList