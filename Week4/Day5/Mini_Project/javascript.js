const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];

  const robotContainer=document.getElementById("robot-card-contianer");
  console.log(robotContainer)



  //event listener on input tag//

  const input=document.getElementsByTagName("input")[0];
  console.log(input)

  input.addEventListener("keyup", filterRobots)


  function filterRobots () {
    // console.log(1)
    let filterValues= input.value.toLowerCase()
    console.log(filterValues)
    let data=searchRobots (filterValues,robots)
    buildRobotCards (data)

  }

  //Search robots//

  function searchRobots (filterValues,data) {
    let filteredRobot= [];
    for(let i=0; i<data.length; i++) {
    let robotName= data[i].name.toLowerCase()
    if (robotName.includes(filterValues)) {
      filteredRobot.push(data[i])
    console.log(filteredRobot)
    }
    }

    return filteredRobot
  }


buildRobotCards(robots)

function buildRobotCards (data) {

//The reason why it needs to be cleared up because each time we call this function because the keyup event we clearing this up building a cards according what we type//
  robotContainer.innerHTML=""
  
  for (let i= 0; i <data.length ; i++)  {
    // console.log(data[i])

    const cardColumns= document.createElement("div");
    cardColumns.classList.add("card")

    const imagesContainer=document.createElement("img");
    imagesContainer.classList.add("robot-images")
    imagesContainer.src=data[i]["image"]

    const namesOfRobots=document.createElement("p");
    namesOfRobots.classList.add("robot-name")
    namesOfRobots.innerText=data[i]["name"]

    const robotEmail=document.createElement("p");
    robotEmail.classList.add("robot-email")
    robotEmail.innerText=data[i]["email"]

    cardColumns.appendChild(imagesContainer)
    cardColumns.appendChild(namesOfRobots)
    cardColumns.appendChild(robotEmail)
    robotContainer.appendChild(cardColumns)
  }

}

