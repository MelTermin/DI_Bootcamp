let groceries = {
  fruits : ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice : "20$",
  other : {
      payed : true,
      meansOfPayment : ["cash", "creditCard"]
  }
}

let newGroceries=groceries;
newGroceries["totalPrice"]= "35$";
newGroceries["other"]["payed"]="false"

//Since we assigned to a new variable both objects will have changed values.
console.log(newGroceries)
console.log(groceries)