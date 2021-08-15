const Card= (props) => {
  const {robotinfo}=props
  console.log(robotinfo)
  const {name,email, id, username}=robotinfo
  return (
    <div>
      <img src={`https://robohash.org/${id}/size=200x200`} alt='robot'></img>
      <div>
        <h2>Robot Name: {name}</h2>
        <p>email: {email}</p>
        <p>{username}</p>
      </div>
    </div>
  )

}
export default Card