// вариант 2
var stringFunc = function (surname, name, middleName) {
    return "Привет, " + surname + " " + name + " " + middleName;
};
var resStringFunc = stringFunc("Малышев", "Артём", "Павлович");
console.log(resStringFunc);
var firstName = 'Артём';
var lastName = 'Малышев';
var age = 19;
var groupId = 6202;
var allData = [lastName, firstName, age];
var exams = ["ООП", "Матанализ", "Ино"];
console.log(allData);
console.log(exams);
var data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
var jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
var someObject = JSON.parse(jsonStringify);
console.log(someObject);
