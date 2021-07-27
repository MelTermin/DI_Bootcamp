const arrayOfWords = ['cucumber', "flower", 'tomatos', 'avocado']

const makeAllCaps = (arr) => {
    let p = new Promise((resolve, reject) => {
        let newarr = arr.map(item => {
            if(typeof(item) == 'string') {
                return item.toUpperCase();
            }
            else {
                reject ()
            }
        })
        resolve(newarr)
    })
    return p;
}

makeAllCaps(arrayOfWords)
.then(data => console.log(data.sort()))
.catch(err => console.log('One of your items is not a string'))


//Exercise 2//
let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// console.log(morse)





function toJS() {
  let obj=JSON.parse(morse);
  console.log(obj)

  let x = new Promise((resolve, reject) => {

  });

  return obj
}

toJS()