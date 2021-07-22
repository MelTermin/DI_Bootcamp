function clearString (str) {
  let clean=str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("")
  return clean
}

console.log(clearString("happy birthday"));
  

function anagram (a,b) {
  let aString=clearString(a);
  let bString=clearString(b)

  if (aString===bString) {
return console.log(true)
  }else {
    return console.log(false)
  }
}

anagram("listen", "silent")

// console.log(`${aString} is anagram of ${bString}`)