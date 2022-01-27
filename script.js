


/* number 1 */

let drinkAge = 18;

let isOldEnoughToDrink = function(n) {
  if (n >= drinkAge) {
       console.log('You are old enough to drink');
  } else {
    console.log('You are not old enough to drink');
  }
}

isOldEnoughToDrink(22);


/* number 2*/

let drinkAge = 200;
let isOldEnoughToDrinkAndDrive = function(n) {
    if (n > drinkAge) {
        console.log('You are old enough to drink an drive')
    } else {
        console.log('It is illegal to drink and drive');
    }
}


isOldEnoughToDrinkAndDrive(22)






/* number 3 */
let census = {
  boy: 3,
  girl: 5,
  men: 6,
  women: 7 
}

let obj = census;


let getProperty = function(obj) { 
      console.log(obj);
}
getProperty ()






/* number 5 */
let drinkAge = 18;
let driveAge = 18;

let person = {
  age: 45
}

let n = person.age;

let isPersonOldEnoughToDrinkAndDrive = function(n) {
  if (drinkAge < n || driveAge < n ) {
       console.log("do not drink and drive");
  } 

  if (drinkAge < n & driveAge < n ){
    console.log("do not drink and drive");
  }
  else {
    console.log("Do not drink and drive");
  }
}
isPersonOldEnoughToDrinkAndDrive(35)





/* number 6*/

let word1 = '';
let word2 = '';

let computeAverageLengthOfWords = function(word1, word2) {
  let x = word1.length;
  let y = word2.length;

  let avg = (x += y )/2;

  console.log(avg)
}
computeAverageLengthOfWords('girl', 'kolade')


