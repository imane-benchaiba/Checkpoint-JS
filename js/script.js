// Find the smallest and biggest number
/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order. */
function minMax(arr) {
	let min=1000, max=-1000;
	let a = [];
	for(let i=0; i<arr.length; i++){
		if(arr[i]<min){
			min=arr[i];
		}
		if(arr[i]>max){
			max=arr[i];
		}
	}
    a[0]=min;
    a[1]=max;
	return a;
}
minMax([1,2,6,8,10]);



// Equal number
/* Create a function that returns true when num1 is equal to num2; otherwise return false. */
function isSameNum(num1, num2){
    if(num1 === num2) return true;
    else return false;
}
isSameNum(2, "2");



// Filter string from number
/* Create a function that takes an array of non-negative integers and strings and return a new array without the strings.*/
function filterArray(arr) {
	let i=0, j=0;
	let a = [];
	while(i<arr.length){
		if(arr[i] === parseInt(arr[i]) ){
			a[j] = arr[i];
			j++;
		}
        i++;
	}
	return a;
}
filterArray([1,"2",3,"s"]);



// Absolute sum
/* Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.*/
function getAbsSum(arr) {
	let i=0, sum=0;
	while(i<arr.length){
		if(arr[i]>=0) sum = sum + arr[i];
		else sum = sum - arr[i];
		i++;
	}
	return sum;
}
getAbsSum([2, -1, 4, 8, 10]);




// Number of true
/* Create a function which returns the number of true values there are in an array. */
function countTrue(arr) {
	 let i=0, nbr=0;
     while(i<arr.length){
         if(arr[i] == true) nbr++;
         i++;
     }
     return nbr;
}
countTrue([true, false, false, true, false]);




// Printer level
/* Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out. */
function inkLevels(inks) {
	let values = Object.values(inks);
	let i=0, min=1000000;
	while(i<values.length){
		if(values[i]<min){
			min=values[i];
		}
		i++
	}
	return min;
}
inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
  });
  inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
  });




// Key values into array
/* Write a function that converts an object into an array of keys and values. */
function objectToArray(obj) {
	let array = [];
	let keys = Object.keys(obj);
	for(let j=0; j<keys.length; j++){
		array[j] = [];
	}
	
	let i=0;
	while(i<keys.length){
		array[i][0]=keys[i];
		array[i][1]=obj[keys[i]];
		i++;
	}
    return array;
}
objectToArray(objectToArray({
    D: 1,
    B: 2,
    C: 3
  }));




// People budgets
/* Create the function that takes an array with objects and returns the sum of people's budgets. */
function getBudgets(arr) {
	let i=0, sum=0;
	while(i<arr.length){
		sum = sum + arr[i].budget;
		i++;
	}
	return sum;

}
getBudgets([
	{ name: "John", age: 21, budget: 23000 },
	{ name: "Steve",  age: 32, budget: 40000 },
	{ name: "Martin",  age: 16, budget: 2700 }
  ]);




// Ageing the population
/* Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n. */
function afterNYears(names, n) {
	if(n<0) n = -n;
	let keys = Object.keys(names);
	let i=0;
	while(i<keys.length){
		names[keys[i]] = names[keys[i]]+n;
		i++;
	}
	return names;
};

afterNYears({
	"Joel" : 32,
	"Fred" : 44,
	"Reginald" : 65,
	"Susan" : 33,
	"Julian" : 13
  }, 1);



// Greeting
/* Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object. */
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	let keys = Object.keys(GUEST_LIST);
	let i=0;
	while(i<keys.length){
		if(keys[i] == name){
			return "Hi! I'm "+ keys[i] +", and I'm from "+ GUEST_LIST[keys[i]] +"."
		}
		i++;
	}
	if(i==keys.length) return "Hi! I'm a guest.";
}

greeting("Randy");
greeting("Sam");
greeting("Monti");