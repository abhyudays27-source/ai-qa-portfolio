/*const testId = "TC01";
const testName = "Login with valid credentials";
const totalSteps = 5;
const passedSteps = 4;

const passPercentage = (passedSteps / totalSteps) * 100;
const allPassed = passedSteps === totalSteps;

console.log(`Test: ${testId} - ${testName}`);
console.log(`Passed ${passedSteps} of ${totalSteps} steps`);
console.log(`Pass percentage: ${passPercentage}%`);
console.log(`Did everything pass? ${allPassed}`);*/ //code worked.
// if
/*const passPercentage = 85;
if (passPercentage >= 80) {
    console.log("Build is good to release");
}*/
// else
/*const passPercentage = 75;
if (passPercentage >= 80){
    console.log("Build is good to release");
} else {
    console.log("Build needs to be fixed");
}*/
// ifelse
/*const passPercentage = 65;
if (passPercentage >= 90){
    console.log("Excellent");
} else if (passPercentage >= 70){
    console.log("Acceptable");
} else if (passPercentage >= 50){
    console.log("Needs imprvoement");
} else {
    console.log("Critical: do not release");
}*/
// combining conditions.
/*const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn && isAdmin){
    console.log("Show admin panel");
} else if (isLoggedIn){
    console.log("Show normal dashboard");
} else {
    console.log("Show login page");
}*/
// actual qa wxample
/*const actualResult = "Swag Labs";
const expectedResult = "Swag Labs";
if (actualResult === expectedResult){
    console.log("Pass: page title is correct");
} else{
    console.log(`FAIL: expected "${expectedResult}" but got "${actualResult}"`);
}*/
/*const browsers = ["Chrome", "Firefox", "Safari"];

for (let i = 0; i<browsers.length; i++) {
    console.log(`Testing on ${browsers[i]}`);
}*/
//for..of loop
/*onst browsers = ["Chrome", "Firefox", "Safari"];

for (const browser of browsers) {
  console.log(`Testing on ${browser}`);
}*/
//while loop
/*let attempts = 1;

while (attempts <= 3) {
  console.log(`Login attempt ${attempts}`);
  attempts++;
}*/
// loop and if both
/*const results = ["Passed", "Fialed", "Passed", "Passed", "Failed"];
let passedCount = 0;
let failedCount = 0;
for (const result of results){
    if (result === "Passed"){
        passedCount++;
    } else {
        failedCount++;
    }
    
}
console.log(`Passed: ${passedCount}, Failed: ${failedCount}`);*/
//break and continue
/*const tests = ["Login", "Search", "Checkout", "Logout" ];
for (const test of tests){
    if ( test === "Search"){
        continue; 
    }
    if ( test === "Logout"){
        break;
    }
    console.log(`Running ${test}`);
}*/

