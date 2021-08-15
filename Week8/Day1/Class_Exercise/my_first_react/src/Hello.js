import './Hello.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Hello =(props)=> {
  console.log(props)//this very usefull for development purposes
  const {name,username, myarr}=props //this is decoding
  console.log(myarr)
return (
  <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    <p className="first" style= {{color:"black", backgroundColor:"green"}}>Melissa</p>
    <h1>Hello from my first component {name} </h1>
    <h1>Hello from my first component {username} </h1>
    <h2>Username: {username}</h2>
  </div>
)
}

export default Hello