const createSelectBox = (countries) => {
  const results = document.getElementById('results');
  const select = document.createElement('select');
  results.appendChild(select)
  countries.forEach((item, i) => {
      let opt = new Option(item.country, item.country_id);
      select.appendChild(opt);
  });

}

const getCountries = () => {
  fetch('http://localhost:3000/getCountries')
  .then(res => res.json())
  .then(data=> {
    createSelectBox(data);
  })
  .catch(e=>{
    console.log(e);
  })
}




getCountries()


console.log("hello")