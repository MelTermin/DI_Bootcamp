const currencyNameUrl="http://api.currencylayer.com/list?access_key=3eb11cd3252832309330078627e12122";

let input=document.getElementById("input")
let btn=document.getElementById("btn")
console.log(btn,input)

const select=document.querySelector(".to")
console.log(select)

const optionFrom=document.querySelector(".from")
console.log(optionFrom)

const result=document.getElementById("result")

const container=document.querySelector(".main-container")

fetch(currencyNameUrl)
 .then((response) => response.json())
 .then((data) =>  {

// let rates=data.currencies
// console.log(rates)

console.log(data.currencies)
console.log(Object.keys(data.currencies))
const currencyAcryObject=data.currencies
const currencyArray=Object.keys(currencyAcryObject) 

const names= Object.values(currencyAcryObject)
console.log(names) 



for(let i=0; i<currencyArray.length; i++) {
  const option=document.createElement("option");
  option.value=currencyArray[i];
  option.innerText=currencyArray[i] +" " + "-"  +" " + names[i];
  select.append(option)

  const option2=document.createElement("option");
  option2.value=currencyArray[i];
  option2.innerText=currencyArray[i] +" " + "-"  +" " + names[i];
  optionFrom.append(option2)
}
 });






 btn.addEventListener("click", currencyConverter)

 function currencyConverter (e) {
   e.preventDefault()
   console.log(" converter clicked")




let amount = input.value
let sourceFrom = select.value;
console.log(sourceFrom)
let toCurrency = optionFrom.value;
let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${sourceFrom}&to_currency=${toCurrency}&apikey=H8U5465C73W24DRO`


fetch(url)
 .then((response) => response.json())
 .then((data) =>  {
console.log(data)

let currency = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*amount;
console.log(currency)



result.append(currency)

setTimeout(() => {
  result.innerHTML=""
  amount.innerHTML=""
}, 3000);



 })
 }