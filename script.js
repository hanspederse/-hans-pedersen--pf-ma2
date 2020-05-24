document.write("<pre>");

document.writeln("welkom to Variable");

//Create an array called petArray with 3 string items in it: "cat", "cow", "dog".//
var petArry = ["cat","cow","dog"];

//Console log the value of the second item in petArray.//
console.log(petArry[1]);


for(var i=0; i < petArry.length; i++){
    console.log(i);
}
//Add the item "sheep" to petArray using the push method.//
let sheep = ['petArry'];

sheep.push('sheep'); // ['pettArry', 'sheep']

sheep.push('petArry', 'sheep'); 

//Console log how many items there are now in petArray using the length method.//
console.log (petArry.length);

var person = {
    name: "cat",
    colour: "white",
    age: "10"
}
console.log (person);
//Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.//
var name = 10;
var colour = 20;
var age  = 10;
//Console log the value of the third property of catObject.//
console.log(name,colour,age);

console.log(age);
//Take the value of catObject (the {} part) and place it inside an array called catArray.//
var catArry = [
    {
      name: "catArry",
      age: 25
    }
  ];

//Loop through catArray and console log each property of each object inside (there will be only 1 object inside).//
console.log;


//Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.//
function logToConsole(firstName,lastName){
    var fullName = firstName + " " + lastName;
    return fullName;
}

var object = logToConsole ("car","house");
console.log("this is my objects " + object);

var house = 18;
var car = 40;
var total = house + car;
console.log(total);

//Call the logToConsole function and pass in the value "donkey".//
function logToConsole(donkey){
    var Name = donkey; 
    return Name;
}
var donkey = logToConsole ("donkey");
console.log("donkey " + name);