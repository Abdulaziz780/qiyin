let ispalindromarr = ['non', 'olma', 'Азиза', 'gul', 'mashina'];
let palindromeWords = [];
let nonPalindromeWords = [];

ispalindromarr.forEach(word => {
    let lowercaseWord = word.toLowerCase();
    let cleanWord = lowercaseWord.replace(/[^а-яa-z]/g, '');
    if (cleanWord === cleanWord.split('').reverse().join('')) {
        palindromeWords.push(word);
    } else {
        nonPalindromeWords.push(word);
    }
});

console.log(palindromeWords);
console.log(nonPalindromeWords);