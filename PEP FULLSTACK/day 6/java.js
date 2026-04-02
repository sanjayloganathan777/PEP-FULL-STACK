for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let n of numbers) {
  sum += n;
}
console.log(sum);

const text = "madom";
const reversed = text.split("").reverse().join("");
const isPalindrome = text === reversed;
console.log(text, "=>", reversed, ":", isPalindrome);

let n = [1, 2, 3, 4, 5, 6];
console.log("Before F[1]:" + n);
n[1] = 10;
console.log("After F[1]:" + n);
const n1 = [1,2,3,4,5,6,7,8,9,10];
console.log("Before Splice : "+n1);
removed_elements = n1.splice(2,2,[25,36]);
console.log("Removed items : "+removed_elements);
console.log(n1);