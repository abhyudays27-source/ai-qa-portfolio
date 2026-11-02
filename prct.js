/*const name = "Abhyuday Singh";
const city = "Delhi";
const course = "Javascript";
console.log(`My name is ${name},I live in ${city} and I am learning ${course}`);*/
/*const bugId = "TC102";
const title = "Login Test";
const severity = "High";
const isFixed = true;
console.log(`${bugId} ${title} ${severity} ${isFixed}`);*/
/*const totalTest = 40;
const totalPass = 34;
const failedCount = (totalTest - totalPass);
const passPercentage = (totalPass/totalTest) * 100;
console.log(failedCount,passPercentage);*/
/*const age = 20;
if 
    (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    
}*/
/*const severity = "High";
if (severity === "Critical") {
    console.log("Fix Today");
} else if (severity === "High") {
    console.log("Fix this week");
} else {
    console.log("Fix Later");
}*/
/*for (i = 1; i <=10; i++){
    console.log(i);
}*/
/*for(i=1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}*/
/*const statuses = ["Passed", "Failed", "Passed", "Blocked", "Passed"];
let passed = 0;
let failed = 0;
let blocked = 0;
for (const status of statuses){
    if (status === "Passed"){
        passed++;
} else if (status === "Failed"){
    failed++;
} else {
    blocked++;
}
}
console.log(`Passed: ${passed}, Failed: ${failed}, Blocked: ${blocked}`);*/
/*let count = 5;
while(count >= 1){
    console.log(count);
    count--;
}
console.log("Start");*/
/*function greetUser(name){
    console.log("Hello" + name);
}
greetUser("Rahul");
greetUser("Priya");*/
/*function addNumbers(a , b){
    console.log(a + b);
}
addNumbers(2 , 3);
addNumbers(5 , 6);*/
/*function addNumbers(a , b){
    return a + b;
}
let result = addNumbers(20 , 40);
console.log(result);*/
function addWithLog(a , b){
    console.log(a + b);
}
function addWithReturn(a , b){
    return (a + b);
}
const x = addWithLog(2 , 3);
const y = addWithReturn(2 , 3);
console.log(x);
console.log(y);