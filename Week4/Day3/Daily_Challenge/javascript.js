let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


const getCarHonda = (carInventory) => {
  
  const { car_make, car_model, car_year } = carInventory.find(
      (car) => car.car_make === 'Honda'
  )

  
  return `This is a ${car_make} ${car_model} from ${car_year}.`
}

console.log(getCarHonda(inventory))

// Part 2
const sortCarInventoryByYear = (carInventory) => {
  carInventory.sort((a, b) => {
      return a.car_year - b.car_year
  })
}

sortCarInventoryByYear(inventory)
console.log(inventory)