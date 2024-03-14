40,98,36,64,95,11,29,19,26,47,21,27,31,82,70,55,74,9,77,72,3,23,74,60,60,30,19,50,18,69,66,87,76,52,45,8,35,36,29,18,85,90,56,17,99 / true
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
7,46,17,29,85,33,41,49,82,40,1,98,71,38,26,77,26,53,78,52,42,79,65,21,88,69,6,46,89,77,64,51,21,10,69,81,60,56,65,21,68,38,52 / 68,99,98,6,66,26,33
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

false - 83

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
25,1,31,41,16,22 - true
const findLargestNumber = numbers => Math.max(...numbers);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

28 - 34,18,19,86,89,38,13,81,36,14,30,27,40,6,41,46,51,87,17,25,30,88,49,26,56,32,49,44,76,71,65,77,74,17,13,12,98,82,70,53,79,3,59,78,17,22,19,34,5,3,62,67,93,44,91,56,17,46,90,46,80,37,25,29,29,96,34,68,11,6,42,17,63,43,63,9,9,34,21,82,60,73,21,59,40,52,23,36,62,57
class MyClass { constructor() { this.property = getRandomString(); } }
39,2,22,77,79,10,46,66,76,69,46,95,52,30,76,33,69,19,58,27,5,1,88,81,84,21,10,15,2,89,84 / false
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
47,65,30,99,85,65,75,98,74,43,22,92,47,18,17,47,83,36,15,20,7,95,46,60,94,11,97,66,23,13,57,79,50,47,5,32,5,67,84,87,10,86,36,0,42,80,52,54,55,1,26,68,14,15,8,33,14,25,35,17,26,34,3,30,21,10,17,48,88 * true
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

kiwi

const getRandomSubset = (array, size) => array.slice(0, size);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
kiwi

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
99 + orange
function addNumbers(a, b) { return a + b; }
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const findSmallestNumber = numbers => Math.min(...numbers);
80 / 48,34,93,29,8,38,56,31,54,38,53,44,36,40,93,33,73,57,89,20,97,99,5,12,85,56,57,78,78,79,41,32,95,6,54,58,15,0,60,93,95,20,56,26,25,83,27,50,58,55,0,9,4,41,88,23,82,23,42,83,7,96,32
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
16 - 49
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const filterEvenNumbers = numbers => numbers.filter(isEven);
34 + 64
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
22,38,73,30,63,68,81,64,3,91,18,6,12,93,16,92,16,86 / 17,78,43,20,87,44,63,10,7,99,24,63,92,71,69,55,53,30,1,17,5,31,43,94,35,78,9,38,23,8,93,78,33,37,6,56,56,48,95,92,59,0,1,82,88,97,52,80,34,89,28,91,7,22,14,18,23,84,56,80,63,58,45,0,25,80,7,79,48,72,56,37,2,61,86,51,40,19,13,56,32,3,54,89,23,62,74
const multiply = (a, b) => a * b;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
kiwi * false

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
false - 77,37,62,80,14,12,91,16,37,70,38,12,55,31,12,23,81,69,55,20,67,2,49,6,2,90,20,14,20,17,53,17,43,11,34,53,61,55,99,62,15,7,90,4,61,11,12,80,44,17,75,60
const reverseString = str => str.split("").reverse().join("");
orange

const isPalindrome = str => str === str.split("").reverse().join("");
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
48 - 47
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
