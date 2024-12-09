// вариант 2
let stringFunc = (surname: string, name: string, middleName: string) => {
    return "Привет, " + surname + " " + name + " " + middleName;
};

const resStringFunc: string = stringFunc("Малышев", "Артём", "Павлович");

console.log(resStringFunc);




const firstName: string = 'Артём';
let lastName: string = 'Малышев';
let age: number = 19;
const groupId: number = 6202;

const allData: unknown = [lastName, firstName, age];
const exams: string[] = ["ООП", "Матанализ", "Ино"];
console.log(allData);
console.log(exams);




interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}

const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
}

const jsonStringify: string = JSON.stringify(data);

console.log(jsonStringify);

const someObject = JSON.parse(jsonStringify);

console.log(someObject);