
import './App.css';

function App() {
  const myelement=<h1>I Love JSX!</h1>
  const sum= 10
  const listItem= ["Apples", "Bananas", "Cherries"]
  // const object = {
  //   first_name: 'Bob',
  //   last_name: 'Dylan'
  // };

  const animals = ['Horse','Turtle','Elephant','Monkey'];

  return (
    <div >
     <h1>Hello World!</h1> 
     <p>I don't use JSX!</p>
     <p>{myelement}</p>
     <p>React is {sum} times better with JSX </p>
     {
        listItem.map(item=> {
          return <ul>
            <li>{item}</li>
          </ul>
        })
      }

      <input></input>
    
    {/* I couldnt do the exercise 6 */}

     {
               animals.map(item=> {
                return <ul>
                  <li>{item}</li>
                </ul>
              })
     }

    </div>
  );
}

export default App;
