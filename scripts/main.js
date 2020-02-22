//loop through all programs
//make an array of Selected programs
//iterate Selected(ex. puzzleGame) programs and find a match from libraryOfPrograms
//assign user's inputed value to temporary variable
//extract result
//pick random sentence from the result
//convert to percentages if prompted
//add result to generatedNote
//go to the next item in the array
//repeat until last item
let idForSelectedInput = "puzzleGameInput"; // for test purposes
let isPercentCheckbox = "puzzleGamePercent"; //test
let generatedNote = "";
let gender = "He"; 
//display generatedNote in <textarea> below
let userInput = document.querySelector(`#${idForSelectedInput}`).value;
let libraryOfPrograms = [ 
                        //RBT PROGRAMS
                        {name: "puzzle", result: [`${userInput} puzzle First variation and then ${gender} wrote `, `puzzle Second ${userInput} variation`, `puzzle third variation ${userInput}`]},
                        {name: "activitySchedule", result: [`${userInput} schedule First variation`, `schedule Second ${userInput}variation`, `schedule third variation ${userInput}`]}, 
                        {name: "walking", result: [`${userInput} walking First variation`, `walking Second ${userInput}variation`, `walking third variation ${userInput}`]},
                        //BCBA PROGRAMS
                        {name: "bcba program", result: [`${userInput} First variation`, `Second ${userInput}variation`, `third variation ${userInput}`]},
];
console.log(libraryOfPrograms);
//loop through all programs
//make an array of Selected programs
//TODO

//iterate over Selected(ex. puzzleGame) programs and find a match from libraryOfPrograms
////assign user's inputed value to temporary variable
////find a match from libraryOfPrograms
////extract Result array
////pick random sentence from the Result[randomNumber]
////convert to percentages if prompted
////add programVariation to generatedNote
//TODO


//go to the next item in the array
//repeat until last item

////assign user's inputed value to temporary variable

////pick random sentence from the Result[randomNumber]
let arrayLength = Object.values(libraryOfPrograms[0]["result"]).length;
let randomNumber = (Math.floor(Math.random() * Math.floor(3)))//randomNumber between 0 and 2
//console.log(randomNumber); // check if it works
console.log(randomNumber);
////extract Result array
let programVariation = Object.values(libraryOfPrograms[0]["result"])[randomNumber];//return Result array(for the Selected item) from libraryOfPrograms
console.log(programVariation)
////convert to percentages if prompted
let convertToPercent = document.querySelector(`#${isPercentCheckbox}`).checked; // returns true or false
if (convertToPercent){ //convert to Integer 
    userInput = toString(parseInt(puzzleGameInput) * 100) + "%";
}


////add programVariation to generatedNote
generatedNote += programVariation + " ";
//temporarily test
randomNumber = (Math.floor(Math.random() * Math.floor(3)))
programVariation = Object.values(libraryOfPrograms[2]["result"])[randomNumber]; //walking Object; [0] first sentence;
generatedNote += programVariation + " ";


//last statement
let textArea = document.querySelector("textarea");
console.log(textArea);
textArea.value = generatedNote;

// add comment testing