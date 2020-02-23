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
                        {name: "waiting", result: [`${userInput} waiting First variation`, `waiting Second ${userInput}variation`, `waiting third variation ${userInput}`]},
                        {name: "cleanUp", result: [`${userInput} cleanUp First variation`, `cleanUp Second ${userInput}variation`, `cleanUp third variation ${userInput}`]},
                        {name: "safetyDirections", result: [`${userInput} safetyDirections First variation`, `safetyDirections Second ${userInput}variation`, `safetyDirections third variation ${userInput}`]},
                        {name: "sorting", result: [`${userInput} sorting First variation`, `sorting Second ${userInput}variation`, `sorting third variation ${userInput}`]},
                        {name: "stringingBeads", result: [`${userInput} stringingBeads First variation`, `stringingBeads Second ${userInput}variation`, `stringingBeads third variation ${userInput}`]},
                        {name: "safetyDirections", result: [`${userInput} safetyDirections First variation`, `safetyDirections Second ${userInput}variation`, `safetyDirections third variation ${userInput}`]},
                        {name: "vocalImitation", result: [`${userInput} vocalImitation First variation`, `vocalImitation Second ${userInput}variation`, `vocalImitation third variation ${userInput}`]},
                        {name: "gmi", result: [`${userInput} gmi First variation`, `gmi Second ${userInput}variation`, `gmi third variation ${userInput}`]},
                        {name: "fmi", result: [`${userInput} fmi First variation`, `fmi Second ${userInput}variation`, `fmi third variation ${userInput}`]},
                        {name: "imWithObjects", result: [`${userInput} imWithObjects First variation`, `imWithObjects Second ${userInput}variation`, `imWithObjects third variation ${userInput}`]},
                        {name: "attendanceSong", result: [`${userInput} attendanceSong First variation`, `attendanceSong Second ${userInput}variation`, `attendanceSong third variation ${userInput}`]},
                        {name: "napPrep", result: [`${userInput} napPrep First variation`, `napPrep Second ${userInput}variation`, `napPrep third variation ${userInput}`]},
                        {name: "selfRegulation", result: [`${userInput} selfRegulation First variation`, `selfRegulation Second ${userInput}variation`, `selfRegulation third variation ${userInput}`]},
                        {name: "toothbrushing", result: [`${userInput} toothbrushing First variation`, `toothbrushing Second ${userInput}variation`, `toothbrushing third variation ${userInput}`]},
                        {name: "reading", result: [`${userInput} reading First variation`, `reading Second ${userInput}variation`, `reading third variation ${userInput}`]},
                        {name: "art", result: [`${userInput} art First variation`, `walking Second ${userInput}variation`, `art third variation ${userInput}`]},
                        {name: "communicatesNo", result: [`${userInput} communicatesNo First variation`, `communicatesNo Second ${userInput}variation`, `communicatesNo third variation ${userInput}`]},
                        {name: "greetings", result: [`${userInput} greetings First variation`, `greetings Second ${userInput}variation`, `greetings third variation ${userInput}`]},
                        {name: "respondsToName", result: [`${userInput} respondsToName First variation`, `respondsToName Second ${userInput}variation`, `respondsToName third variation ${userInput}`]},
                        {name: "manding", result: [`${userInput} manding First variation`, `manding Second ${userInput}variation`, `manding third variation ${userInput}`]},
                        {name: "deniedAccess", result: [`${userInput} deniedAccess First variation`, `deniedAccess Second ${userInput}variation`, `deniedAccess third variation ${userInput}`]},
                        {name: "gameplay", result: [`${userInput} gameplay First variation`, `gameplay Second ${userInput}variation`, `gameplay third variation ${userInput}`]},
                        {name: "timer", result: [`${userInput} timer First variation`, `timer Second ${userInput}variation`, `timer third variation ${userInput}`]},
                        {name: "jaInitiation", result: [`${userInput} jaInitiation First variation`, `jaInitiation Second ${userInput}variation`, `jaInitiation third variation ${userInput}`]},
                        {name: "relinquishing", result: [`${userInput} relinquishing First variation`, `relinquishing Second ${userInput}variation`, `relinquishing third variation ${userInput}`]},
                        {name: "pecs", result: [`${userInput} pecs First variation`, `pecs Second ${userInput}variation`, `pecs third variation ${userInput}`]},
                        {name: "songGestures", result: [`${userInput} songGestures First variation`, `songGestures Second ${userInput}variation`, `songGestures third variation ${userInput}`]},
                        {name: "chooseBtwnTwo", result: [`${userInput} chooseBtwnTwo First variation`, `chooseBtwnTwo Second ${userInput}variation`, `chooseBtwnTwo third variation ${userInput}`]},
                        {name: "mandsMissing", result: [`${userInput} mandsMissing First variation`, `mandsMissing Second ${userInput}variation`, `mandsMissing third variation ${userInput}`]},
                        {name: "peerRequests", result: [`${userInput} peerRequests First variation`, `peerRequests Second ${userInput}variation`, `peerRequests third variation ${userInput}`]},
                        {name: "smallGroups", result: [`${userInput} smallGroups First variation`, `smallGroups Second ${userInput}variation`, `smallGroups third variation ${userInput}`]},
                        {name: "interval", result: [`${userInput} interval First variation`, `interval Second ${userInput}variation`, `interval third variation ${userInput}`]},
                        {name: "np", result: [`${userInput} np First variation`, `np Second ${userInput}variation`, `np third variation ${userInput}`]},


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