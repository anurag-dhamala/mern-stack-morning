
// console.log(null == 0); // false
// console.log(null > 0); // false (0 > 0)
// console.log(null >= 0); // true (0 >= 0)

// LOOPS // 
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for...of loop
// 5. for ... in loop
// 6. forEach method
// 7. map method

const arr = [1, 2, 3, 4];
const zeroIndexValue = arr[0];
const firstIndexValue = arr[1];
const secondIndexValue = arr[2];

// // BASIC FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(5*i);
}

// // WHILE LOOP
let age = 80;
while(age < 90) {
    console.log("I am alive.");
    // 
    // 
    age++;
}
console.log("I died");  

// DO WHILE LOOP (Assignment)

// for ... of loop

const footballClubs = ["Barcelona", "RealMadrid", "Manchester"];
for (let club of footballClubs) {
    if(club === "RealMadrid") {
        console.log(club, " is champion");
    } else {
        console.log("the club is : ", club);
    }
}

console.log("--------------------------------------------------");

for (let i in footballClubs) {
    console.log(footballClubs[i]);
}

// break and continue in loops.

// BREAK EXAMPLE
let phoneHours = 0;
while (true) {
    phoneHours++;
    console.log(`I have used phone for ${phoneHours} hours.`);
    if(phoneHours === 5) {
        console.log("Terminating the loop..");
        break;
    }
}

// CONTINUE EXAMPLE 
let subject = 0;
while (subject < 10) {
    if(subject === 5){
        console.log("I have entered the continue check.")
        subject++;
        continue;
    }
    console.log(`I am reading subject: ${subject}`);
    subject++;
}

