//Primitives from JS: name, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number;

age = 21;

//Arrays and objects

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let details: {
    name: string,
    age: number
};

details = {
    name: 'Utkarsh',
    age: 22
};

//Array of objects

let people: {
    name: string,
    age: number
}[];

people = [{
    name: 'Utk',
    age: 22
},
{
    name: 'Krk',
    age: 40
}];

//Union Types

let course: string | number | boolean = 'React and Typescript';

course = 1234;

//Function  & types

function add(a: number, b: number): number | string {
    return a + b;
}

//Generics

function insertAtBeginning(array: any[], value: any){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);//this array is of type any



