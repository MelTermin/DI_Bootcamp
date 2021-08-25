import axios from 'axios';


export const setFirstInput = (text) => {
  return {
    type:'SELECT_NAME_ONE',
    payload:text
  }
}

export const setSecondInput = (text) => {
  return {
    type:'SELECT_NAME_SECOND',
    payload:text
  }
}


export const fetchNames = (firstname,secondname) => (dispatch) => {
  
  let options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {firstname: firstname, secondname: secondname},
    headers: {
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      'x-rapidapi-key': '69e6ee80c3msha0293102a2b1b69p10242djsnb05d1985bf4c'
    }
  };
  
  axios.request(options).then(function (response) {
  	console.log(response.data);
    dispatch({
      type: 'RESULTS',
      payload:response.data
    })
  }).catch(function (error) {
  	console.error(error);
  });
}



