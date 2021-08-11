const sendData= (e) => {
e.preventDefault()
  //first I need to get input values

  const item= document.getElementById("item").value;
  const amount= document.getElementById("amount").value;
  
 
  console.log(item,amount)
  fetch('/shopping',{
   
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({item,amount})
  })
 

  .then(res => res.json())
  .then(data => {
    console.log(data);

    let display = document.getElementById('display');
    let results= document.createElement("p")
    results.innerHTML = data.item + " "+ " : "  + data.amount
    display.append(results)

  })
 
  .catch(e => {
    console.log(e);

  })
  e.target.reset()
}



