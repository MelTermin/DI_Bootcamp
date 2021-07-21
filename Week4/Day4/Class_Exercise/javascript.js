const student = {
  name: 'John Doe',
  age: 16,
  scores: {
      maths: 74,
      english: 63
  }
};


let newStudent= {...student};
console.log(newStudent)

let cop2= {...student,scores: {...student.scores}}

let copy= {
  ...student,
  scores: {...student.scores},
  goodstudent:true,
}

class Rabbit {
  constructor(type) {
      this.type = type;
  }
  speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("give me a carrot")
blackRabbit.speak(" it is tooo hot")