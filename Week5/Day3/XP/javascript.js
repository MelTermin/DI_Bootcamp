//Exercise 1//

let compareToTen = (num) => {
    let p = new Promise((resolve, reject) => {
        if(num > 10) {
            resolve (`Number ${num} is greater than 10, success!`)
        } else {
            reject (`Your number ${num} is less than 10,error`);
        }
    })
    return p;
} 

compareToTen(6)

.then(resolve => {
    console.log( resolve)
})
.catch(reject => {
    console.log( reject)
})


//exercise 2;


let bool=true

const x = new Promise((resolve, reject) => {
    if(bool == true) {
        setTimeout(() => {
            resolve('success');
        }, 4000);
    } else {
        reject();
    }
});

x.then(values => { 
    console.log(values);
});

x.catch(error => {
    console.log('Ooops something went wrong')
})


//Exercise 3//

let values = Promise.resolve(3)
values.then(value => console.log(value))


let valueBoo = Promise.reject("Boo!")
valueBoo.catch(error => console.log(error))
