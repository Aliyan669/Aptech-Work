// alert("Welcome")  // Dialog Box 
// confirm("Hello World!")   // Confirm Dialog Box 
// prompt("Enter a Name","Aliyan")   // User Prompt Dialog Box
// console.log("Hello World")   // Print on Console
// document.write("Hello World!")   // Print on Screen

//////   Variables in Js   //////

// var name = "Aliyan"   // Variable for String
// var num = 65   // Variable for Number
// console.log(name)


/////    Three Types of Variables     //////

// var name = "Aliyan"
// let name = "Aliyan"
// const name = "Aliyan"


/////    Arithmetic Operators in Js    //////
   
// var number = 22 + 30    /// Addition

// console.log("Addition  >>>",number)

// var number = 50 - 30    /// Subtract 
// console.log("Subtract  >>>",number)

// var number = 2 * 20     /// Multiply
// console.log("Multiply  >>>",number)

// var number = 2 / 20     /// Division
// console.log("Division  >>>",number)

// var number = 2 % 20     /// Modulus
// console.log("Modulus  >>>",number)

// var numm = 2
// numm++    /// Increament
// console.log("Increament  >>>",numm)

// var nummm = 5
// nummm--   /// Decrement
// console.log("Decrement  >>>",nummm)


/////    Concatenating on Text String   //////

// var firstName = "Aliyan ";
// var lastName = "Amir" ;
// console.log(firstName + lastName)


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


//////     Array Method in Js   ///////

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


//////    Class Template Object in Js   ///////

// class student{
//         name= "";
//         age= "";
//         rollNumber= "" ;
//         favSubject= "";

//         stu(){
//             document.write(" Student Name is ", this.name, " Age is ", this.age, " Roll Number is ", this.rollNumber, " Favourite Subject is ",this.favSubject, "<br />")
//         }
//     }

// stud1 = new student;

// stud1.name= "Aliyan";
// stud1.age= "18";
// stud1.rollNumber= "12" ;
// stud1.favSubject= "Math";
// stud1.stu()

// stud2 = new student;

// stud2.name= "Fahad";
// stud2.age= "16";
// stud2.rollNumber= "10" ;
// stud2.favSubject= "Urdu";
// stud2.stu()


//////    String & Change Case Method in Js   ///////

// var text = "Aliyan Amir"
// console.log("Lowercase ----",text.toLowerCase())
// console.log("UpperCase ----",text.toUpperCase())
// console.log("Measuring Length ----",text.slice(0, 6))  // First Arguement index Number , Second Length
// console.log("Finding Measuring Index Number ----",text.indexOf("Amir"))
// console.log("Finding Character at a Location ----",text.charAt(1))
// console.log("Replace Word ----",text.replace("Amir","Hello"))


//////    Math Method in Js   ///////
 
// var num =  2.60;
// console.log("Original Number---",num,"Round of Number ----",Math.round(num))
// console.log("Original Number---",num,"Ceil Method Number ----",Math.ceil(num))
// console.log("Original Number---",num,"Floor Method Number ----",Math.floor(num))


//////    Converting Strings to Integers and Decimals in Js   ///////  parseint()

// var val = parseInt(prompt("Enter a Number"))
// var cal = val*2
// console.log(cal)


//////    Converting Strings to Numbers in Js   /////// 

// var num = "34"                // String 
// // console.log(typeof(num))   
// var convert = Number(num);    // Convert String to Number 
// console.log(typeof(convert))  // Number 


//////    Converting Numbers to Strings in Js   /////// 

// var num = 34                   // Number 
// console.log(typeof(num))   
// var convert = toString(num);   // Convert Number to String 
// console.log(typeof(convert))  // String 


//////   Date Method in Js   /////// 

// var rightNow = new Date();
// console.log(rightNow)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)

 var rightNow = new Date();
// console.log("Get Current Month ",rightNow.getMonth())
// console.log("Get Current Date ",rightNow.getDate())
// console.log("Get Current Year ",rightNow.getFullYear())
// console.log("Get Current Hours ",rightNow.getHours())
// console.log("Get Current Minutes ",rightNow.getMinutes())
// console.log("Get Current Second ",rightNow.getSeconds())
// console.log("Get Current Time ",rightNow.getTime())


//////   Function in Js   /////// 

// function Greet(){      //  function Assign
//     alert("Hello world!")
// }
// Greet()   //  Call this function 


//////  Passing Data on Function in Js   /////// 

// function what(params) {
//     alert(params)
// }

// what("Hello world!")

