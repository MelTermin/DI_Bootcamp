//Client & Server difference

// client is the computer-tablets phones

// server is a computer that serves information to other computers. Server needs to send back the request that client that can understand 


//URL => A TOOL TO FIND WEBPAGES USING WEB BROWSER

//unique  IP address

//that is why we created domain names so we dont have to remember list of numbers of IP address

// https://wwww.marvel.com/charachers => is path a folder structure httpp is protocol


// retrieve stuff for get method

// post to create
//update, delete methods are also existing

// GET METHOD
//=>


const validate = (event)=> {
  event.preventDefault();
  let username = document.getElementById("username").value;
  console.log(username)
  if (username.length < 4) {
      alert("username must be at least 4 characters long");
  } else {
   
  }
}





let form = document.forms[0];
form.addEventListener("submit", validate);