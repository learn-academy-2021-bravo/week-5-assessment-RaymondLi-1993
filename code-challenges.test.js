// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ("convertString", ()=>{
    test ("returns the string with number replacements", () =>{
        expect(convertString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(convertString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(convertString(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})




// b) Create the function that makes the test pass.

/* ----------- PSEUDO CODE -------------------
I want to loop through the entire string and check if its one of the elements that I need to swap. 
If it is an element that I need to swap than I want to concat that number into the new string
If it isn't a element that I need to swap then I just want to concat that element to the new string
I use the .toLowerCase method to take care of captial letters
at the end I return the string with the numbers concated within them.
*/

const convertString = (string) => {
    let newStr = ``;

    for (let i = 0; i < string.length; ++i){
        if(string[i].toLowerCase() === "a"){
            newStr += 4;
        }else if(string[i].toLowerCase() === "e"){
            newStr += 3;
        }else if(string[i].toLowerCase() === "i"){
            newStr += 1;
        }else if(string[i].toLowerCase() === "o"){
            newStr += 0;
        } else {
          newStr += string[i];  
        }
    }
    return newStr;
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Orange", "Apricot", "Peach"]

describe ("returnWords", ()=>{
    test ("returns all the strings that have an a", () =>{
        expect(returnWords(arrayOfWords1)).toEqual(["Apple", "Banana"])
        expect(returnWords(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
        
    })
})



// b) Create the function that makes the test pass.

/* ----------- PSEUDO CODE -------------------
I want to loop through the entire array and check if its one of the elements includes an a.
I can use the built in filter method to do the loop iteration and filtering for me
I can call the tolowercase method to take care of capital letters
I will use the includes method and return all elements that have an a 
*/


const returnWords = (array) => {
    return array.filter((elem) => {
        return elem.toLowerCase().includes("a");
    })
}




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe ("fullHouse", ()=>{
    test ("returns true if array is a full house", () =>{
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})


// b) Create the function that makes the test pass.


/* ----------- PSEUDO CODE -------------------
I want to loop through the entire array and create an object that will keep count of how many certain elements there are
Initialize a empty object
loop through the array and create a key value pair with the element as the key and the incrementing count as the value
convert the values of the object into an array
first I want to check if the length is greater than 2 if that is the case than i know its false
then I want to see if the values are 3 and 2 if they are then I know I have a full house, otherwise its false its not a full house.

*/

const fullHouse = (array) => {
    let map = {};

    for (let elem of array){
        map[elem] = ++map[elem] || 1;
    }

    const resultArray = Object.values(map);
    
    if(resultArray.length > 2){
        return false;
    }

    return resultArray.includes(3) && resultArray.includes(2);
}
