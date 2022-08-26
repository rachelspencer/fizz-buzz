// Write your solution below this line:
// Loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. 
// If the number is evenly divisible by 5, say ‘buzz’. 
// If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. 
// Otherwise, say the number.


for (let num = 1; num < 51; num++){

    if (num % 3 === 0 && num % 5 === 0){
        console.log("fizzbuzz");
    } else if (num % 3 === 0){
        console.log("fizz");
    } else if ( num % 5 === 0){
        console.log("buzz");
    } else {
        console.log(num);
    }
}
