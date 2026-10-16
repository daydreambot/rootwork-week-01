const age = 21;
const score = 85;
const hasLaptop = false;
const hasInternet = true;
const completedApplication = true;

if (age >= 18 &&
    score >= 85 &&
    hasLaptop &&
    hasInternet &&
    completedApplication) {
    console.log("Priority candidate");
} else if (age >= 18 &&
    score >= 60 &&
    hasLaptop &&
    hasInternet &&
    completedApplication
) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}