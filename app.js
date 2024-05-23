// alert("Welcome")  // Dialog Box 
// confirm("Hello World!")   // Confirm Dialog Box 
// prompt("Enter a Name","Aliyan")   // User Prompt Dialog Box
// console.log("Hello World")   // Print on Console
// document.write("Hello World!")   // Print on Screen

//////   Variables in Js   //////

var name = "Aliyan"   // Variable for String
var num = 65   // Variable for Number
// console.log(name)


/////    Three Types of Variables     //////

// var name = "Aliyan"
// let name = "Aliyan"
// const name = "Aliyan"


/////    Arithmetic Operators in Js    //////
   
var number = 22 + 30    /// Addition
console.log("Addition  >>>",number)

var number = 50 - 30    /// Subtract 
console.log("Subtract  >>>",number)

var number = 2 * 20     /// Multiply
console.log("Multiply  >>>",number)

var number = 2 / 20     /// Division
console.log("Division  >>>",number)

var number = 2 % 20     /// Modulus
console.log("Modulus  >>>",number)

var numm = 2
numm++    /// Increament
console.log("Increament  >>>",numm)

var nummm = 5
nummm--   /// Decrement
console.log("Decrement  >>>",nummm)


/////    Concatenating on Text String   //////

var firstName = "Aliyan ";
var lastName = "Amir" ;
console.log(firstName + lastName)


/////   if else Statement in Js   //////

// var fruit = "Mango"

// if (fruit == "Mango") {
//     document.write("Success")
// }else{
//     document.write("Fail")

// }


/////   Examples  //////

// var user = prompt("Enter Your Age")
// if (user >= 6 ) {
//     document.write("You Are go the School")
// }else{
//     document.write("Please Waiting few Year")
// }


// var year = parseInt(prompt("Enter Year"));
// if (year % 4 == 0) {
//     alert("Lip Year")
// } else {
//     alert(" This is not a Lip Year")

// }


/////   Nested if Statement in Js   //////

// var name = prompt("Enter Your Name")
// if (name == "Aliyan" ) {
//     var age = prompt("Enter Your Age")
//     if(age == 18){
//         alert("Welcome to Our Website")
//     }else{
//    alert("Your Age is Incorrect")
//     }
// }else{
//    alert("Your Name is Incorrect")
// }


/////  if Statement check    &&  and  ||    //////

/////     ||    //////
// var name = "Aliyan";
// var age = 18;
// if (name == "Aliyan" || age == 16) {  // Dono me se ek sahi hoga ya dono sahi hoga tu success show hoga  
//    alert("Success")
// }else{
//    alert("Fail")
// }

// /////     &&    //////
// var name = "Aliyan";
// var age = 18;
// if (name == "Aliyan" && age == 18) {  // Dono  sahi hoga  tu success show hoga  
//    alert("Success")
// }else{
//    alert("Fail")
// }


//////     Array in Js   ///////

// var fruits = ["Apple", "Mango", "Strawberry", "Banana"]   /// Array
// document.write(fruits[1])

// console.log(fruits.length)  /// Check the Length of Array

// fruits.pop() /// Remove last value of Array
// document.write(fruits)

// fruits.shift() /// Remove First value of Array
// document.write(fruits)

// fruits.push("Orange") /// Value Add in Last of Array
// document.write(fruits)

// fruits.unshift("Orange") /// Value Add in Start of Array
// document.write(fruits)

// fruits.splice(2,0, "Aliyan") /// First Target on Index Number Second Length then value add and  Replace
// document.write(fruits)

// var fruit1 = ["Apple"]
// var fruit2 = ["Mango"]
// var allFruit = fruit1.concat(fruit2)   /// Concatination on Array
// document.write(allFruit)

// var text = fruits.join(" and ");  /// Join Method Replace (,) to given value 
// document.write(text)


//////    For Loop in Js   ///////

// var text = "Hello World ";
// for (let i = 0; i <= 5; i++) {
//     document.write(text , "<br />")
// }
 
 
//////  Table on For Loop    ///////

// var num = 2 ;
// for (let i = 1; i <= 10; i++) {
//     document.write(num ," x ", i ," = ", num*i , "<br />")
// }


//////     Loop on Array    ///////

// for (i = 0; i < fruits.length; i++) {
//    document.write(fruits[i] , "<br />")
// }


//////    Associative Array & Object in Js   ///////

// const student1 = {
//     name: "Aliyan",
//     age: 18,
//     rollNumber: 12,
//     favSubject: "Math"
// }
// document.write(" Student Name is ", student1.name, " Age is ", student1.age, " Roll Number is ", student1.rollNumber, " Favourite Subject is ", student1.favSubject)


//////    Array of Object in Js   ///////

// const data = [
//     student1 = {
//         name: "Aliyan",
//         age: 18,
//         rollNumber: 12,
//         favSubject: "Math"
//     },
//     student2 = {
//         name: "Fahad",
//         age: 16,
//         rollNumber: 10,
//         favSubject: "English"
//     },
//     student3 = {
//         name: "Bilal",
//         age: 19,
//         rollNumber: 13,
//         favSubject: "Math"
//     }
// ]

// for (i = 0; i < data.length; i++) {
//    document.write(" Student Name is ", data[i].name, " Age is ", data[i].age, " Roll Number is ", data[i].rollNumber, " Favourite Subject is ", data[i].favSubject, "<br />")
// }