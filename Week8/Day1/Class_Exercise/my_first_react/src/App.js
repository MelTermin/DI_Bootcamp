import Hello from './Hello';
import Card from './components/Card'
import './App.css';
const arry=[1,2,3]

const robot = [{
  name: 'Melissa',
  email:'robot@gmail.com',
  username: 'rb1',
  id:1
}, {
  name: 'selin',
  email:'robotselin@gmail.com',
  username: 'rb2',
  id:2
},{
  name: 'ceni',
  email:'robotceni@gmail.com',
  username: 'rb3',
  id:3
},
{
  name: 'eli',
  email:'roboteli@gmail.com',
  username: 'rb4',
  id:4
}]

function App() {
  return (
    <div>My first div
    <div >
      Hi Melissa
      {
        arry.map(item=> {
          return <div>{item}</div>
        })
      }
    </div>
    <Hello name={'Dan'} username= {"Melos"} myarr= {arry}></Hello>
    <br></br>
     {
       robot.map ((item,i)=> {
        return <Card robotinfo= {item}></Card>//this is me specifying the component
       })
     }
    {/* <Card robot={'Melissa'} email= {'robot@gmail.com'} id= {1}></Card>
    <Card robot={'Selin'} email= {'robotselin@gmail.com'} id= {2}></Card> */}
    </div>
  );
}

export default App;
