let xhr1 = new XMLHttpRequest();

console.log(xhr1)
xhr1.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr1.responseType = 'json'; 

xhr1.send();


xhr1.addEventListener('load', () => console.log(xhr1.response))



const xhr = new XMLHttpRequest()

let search="sun"
let limit=10
let offset=2

xhr.open(
    'GET',
    `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&offset=${offset}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
)

xhr.responseType = 'json'


xhr.send()

xhr.addEventListener('load', () => console.log(xhr.response))