const tinderUser = new Object(); // or use this
//const TinderUser = {}; // object literal syntax
//console.log(tinderUser); // o/p -> {}
//console.log(TinderUser); // o/p -> {}

tinderUser.id = "123abc";
tinderUser.name = "Kashif";
tinderUser.isLoggedIn = false;
tinderUser.age = 24;

console.log(tinderUser); // o/p -> { id: '123abc', name: 'Kashif', isLoggedIn: false, age: 24 }

const regularUser = {
    email: "kashif@example.com",
    fullname: {
        firstName: "Kashif",
        lastName: "Ulhaq"
    },
    address: {
        city: "Vellore",
        state: "Tamil Nadu",
        country: "India"
    }
}

console.log(regularUser); // o/p -> { email: 'kashif@example.com', fullname: { firstName: 'Kashif', lastName: 'Ulhaq' }, address: { city: 'Vellore', state: 'Tamil Nadu', country: 'India' } }

console.log(regularUser.fullname.firstName); // o/p -> Kashif this method is used to print object inside object values


/////***************************Merging object */

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3=obj1 + obj2; // it will not merge two objects
// console.log(obj3); // o/p -> [object Object][object Object]

//const obj3 = Object.assign({}, obj1, obj2); // it will merge two objects
//console.log(obj3); // o/p -> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2}; // it will merge two objects
console.log(obj3); // o/p -> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// values from database

const users = [
    {
        id: 1,
        email: "kashif@example.com"
    },
    {
        id: 1,
        email: "kashif@example.com"
    },
    {
        id: 1,
        email: "kashif@example.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); // o/p -> [ '123abc', 'Kashif', false, 24 ]
console.log(Object.entries(tinderUser)); // o/p -> [ [ 'id', '123abc' ], [ 'name', 'Kashif' ], [ 'isLoggedIn', false ], [ 'age', 24 ] ]  ////**array  inside array */


console.log(tinderUser.hasOwnProperty("age")); // o/p -> true  // checking the property exist or not
console.log(tinderUser.hasOwnProperty("country")); // o/p -> false  // checking the property exist or not


/*****************************************************Deconstructor */

const course={
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Kashif"
}

// console.log(course.courseInstructor); // o/p -> Kashif

const{courseInstructor : instructor} = course; // we can change the variable name
console.log(instructor); // o/p -> Kashif

/********************************************JSON */

//{
//   "coursename": "JavaScript",
//   "price": 999,
//   "courseInstructor": "Kashif"
//} 


//sometimes we get data from server in this format and also we get in array format

//  Example
// [   {
//       "coursename": "JavaScript",
//       "price": 999,
//       "courseInstructor": "Kashif"
//   }]