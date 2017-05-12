// JS Exercises

/* 	1. Write a function that prints out the current date and time in 
	the following format: "Today is: DayOfTheWeek, HH:MM DD/MM/YYYY".
	Ex. "Today is: Monday, 7:00 13/3/2017"
*/
function dayOfTheWeek(today) {
	if (today.getDay() === 0) {
		return "Sunday";
	} else if (today.getDay() === 1) {
		return "Monday";
	} else if (today.getDay() === 2) {
		return "Tuesday";
	} else if (today.getDay() === 3) {
		return "Wednesday";
	} else if (today.getDay() === 4) {
		return "Thursday";
	} else if (today.getDay() === 5) {
		return "Friday";
	} else if (today.getDay() === 6) {
		return "Saturday";
	}
};
function dateToday() {
	var today = new Date();
	var month = today.getMonth() + 1; 
	return "Today is: " + dayOfTheWeek(today) + ", "+ today.getHours() + ":" + today.getMinutes() 
	+ " " + month + "/" + today.getDate() + "/" + today.getFullYear();
}
/*  2. Write a function to see if a given year is a leap year.
	A year is a leap year if it is divisible by 4, except for 
	years that are divisible by 100. The years that are divisible
	by 400 however are leap years.
*/
//start with most specific and work outwards
function leapYear(year) {
	if (year%400 === 0) {
		return true;
	} else if (year%100 === 0) {
		return false;
	} else if (year%4 === 0) {
		return true;
	} else {
		return false;
	}
}
/*  3. Write a function that plays a guessing game.
	-pick a random number between 1-20
	-use prompt() to get user input
	-check if guess matches or not
		-if match -> give congratulations message with # of tries
		-if fail -> reprompt for next guess 
*/
function guessingGame() {
	var randomNumber = Math.ceil(20 * Math.random());
	var guess = Number(prompt("Try a number between 1 and 20!"));
	var numTries = 1;
	if (guess === randomNumber) {
		alert("Congratulations! You guessed correctly on the first try.");
	}
	while (guess !== randomNumber) {
		guess = Number(prompt("Try again."));
		numTries++;
		if (guess === randomNumber) {
			alert("Congratulations! It took you " + numTries + " tries.");
			return(guess);
		}
	}	
}
/* 	4. Write a function which takes a string and a letter. It returns 
	the number of times the letter appears in the string
*/
function numOfAppearances(string, letter) {
	var num = 0
	for (var i=0; i < string.length; i++) {
		if (string[i] === letter) {
			num++;
		}
	}
	return num;
}
/* 	5. Write a function that takes an array of numbers and prints the 
	smallest and largest numbers from the array.
*/
function minAndMax(array) {
	var smallest = array[0];
	var largest = array[0];
	for (var i=0; i < array.length; i++) {
		if (array[i+1] > largest) {
			largest = array[i+1];
		}
	}
	console.log("The largest number is " + largest + ".");
	for (var i=0; i < array.length; i++) {
		if (array[i+1] < smallest) {
			smallest = array[i+1];
		}
	}
	console.log("The smallest number is " + smallest + ".");
}
/*	6. Write a function which takes an object as a parameter and prints
	all the property names and their values. Also give the total number of
	properties in the object.
*/
function propertiesAndValues(object) {
	var numOfProps = 0;
	for (var property in object) {
		console.log(property + ": " + object[property]);
		numOfProps++;
	}
	return numOfProps;
}
/*	7. Use the following array for this problem. */
	
	var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

/*
   Write a function which takes as its parameter the above array. Then 
   for each of the elements write a log to the console. Here are example
   logs: "I am reading 'The Road Ahead' by Bill Gates",
   		 "I will read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins"
   If the readingStatus is true, then it should say "am reading", and
   if the readingStatus is false, then it should say "will read".
 */
function print(array) {
	var tense;
	for (var i = 0; i < array.length; i++) {
		if (array[i].readingStatus === true) {
			tense = "am reading '";
		}
		else if (array[i].readingStatus === false) {
			tense = "will read '";
		}
		console.log("I " + tense + array[i].title + "' by " + array[i].author);
	}
}