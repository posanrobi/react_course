// primitives: numbers, string, boolean
// arrays, objects
// function types, parameters

// primitives

let age: number;
age = 12;

let username: string;
username = "Bob";

let isActive: boolean;
isActive = true;

// more komplex types

let hobbies: string[];
hobbies = ["yes", "no", "maybe"];

let person; // let person: any;

let person2: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 20,
};

let people: {
  name: string;
  age: number;
}[];

// tpye inference

//union type

let course: string | number = "React Course";
course = 1223;

let someText: string | string[];

// type alias
type Person = {
  name: string;
  age: number;
};

let personUsingAlias: Person;
let personUsingAliaArrs: Person[];

// functions & types
function addNums(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// generics

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArr = [1, 2, 3];
const updatedArr = insertAtBegining(demoArr, -1); //-1,1,2,3
