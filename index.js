// Exo1

// let reversedString=""
// const sortLetters = (a) => {
//     return reversedString = a.split("").reverse().join("");
// }
// sortLetters("string")
// console.log(reversedString);
// let stringX = 0
// let stringY = 0
// const countEach = (xoxo) => {
//     for (let i = 0; i <= xoxo.length; i++ ) {
        
//         if (xoxo[i]=== "x") {
//             stringX += 1
           
//         } else {
//             stringY += 1            
//         }  

//     }
//     // console.log(stringX);
//     // console.log(stringY);
//     if (stringX === stringY) {        
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } 
// countEach("xoxoxoxoxoxoxoxxx")

// exo3
let palindrome = ""
const isPalindrome = (string) => {
    palindrome = string.split("").reverse().join("")
    console.log(palindrome);
    if (string === palindrome) {
        console.log(true);
    } else {
        console.log(false);
    }

}
isPalindrome("Palindrome !")