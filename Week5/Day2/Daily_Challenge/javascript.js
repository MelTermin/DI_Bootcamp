const btn=document.getElementById("btn");
btn.addEventListener("click", displayGif);

const input=document.getElementById("input")
input.addEventListener("keyup", function() {
  console.log(input.value)
});


function displayGif(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  let form = document.forms[0];
  form.reset();
  xhr = new XMLHttpRequest();
  console.log(xhr)
  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${input}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = () => {
    if(xhr.status != 200){
      console.log(`Error`);
    }
    else{
      loadXml(xhr.response);
    }
  }
}


const loadXml = () => {
  let container = document.querySelector(".gif-container");
  let source = xhr.response["data"][0]["images"]["downsized"]["url"];
  let image = document.createElement("img");
  image.setAttribute("src", source);
  
  let p=document.createElement("p")
  p.innerHTML=xhr.response["data"][0]["title"]

  container.append(image,p);


  
  let deleteButton = document.createElement("button");
  
  deleteButton.innerHTML = "Delete gif";
  container.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
   container.remove(image);
   container.remove(deleteButton);
  });
}

const removeAllGifs = () => {
  let container = document.querySelector(".gif-container");
  container.remove();
}


const deleteAllButton = document.querySelector(".delete");
deleteAllButton.addEventListener("click", removeAllGifs);