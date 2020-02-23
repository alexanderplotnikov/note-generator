
let generatedNote = "";
let gender = "He"; 
//display generatedNote in <textarea> below
let userInput = "";
//resets input on page reload
// var resetInput = document.getElementsByTagName("input");
// for (let ii=0; ii < resetInput.length; ii++) {
//     resetInput[ii].value = "";
//     resetInput[ii].checked = false;
// }
const libraryOfPrograms = [ 
                        //RBT PROGRAMS
                        {id: "puzzle",           name: "Puzzle",                        result: [`${userInput} puzzle First variation and then ${gender} wrote `, `puzzle Second ${userInput} variation`, `puzzle third variation ${userInput}`]},
                        {id: "activitySchedule", name: "Activity Schedule",             result: [`${userInput} schedule First variation`, `schedule Second ${userInput}variation`, `schedule third variation ${userInput}`]}, 
                        {id: "walking",          name: "Walking",                       result: [`${userInput} walking First variation`, `walking Second ${userInput}variation`, `walking third variation ${userInput}`]},
                        {id: "waiting",          name: "Waiting",                       result: [`${userInput} waiting First variation`, `waiting Second ${userInput}variation`, `waiting third variation ${userInput}`]},
                        {id: "cleanUp",          name: "Clean Up",                      result: [`${userInput} cleanUp First variation`, `cleanUp Second ${userInput}variation`, `cleanUp third variation ${userInput}`]},
                        {id: "safetyDirections", name: "Clean Up",                      result: [`${userInput} safetyDirections First variation`, `safetyDirections Second ${userInput}variation`, `safetyDirections third variation ${userInput}`]},
                        {id: "sorting",          name: "Sorting",                       result: [`${userInput} sorting First variation`, `sorting Second ${userInput}variation`, `sorting third variation ${userInput}`]},
                        {id: "stringingBeads",   name: "Stringing Beads",               result: [`${userInput} stringingBeads First variation`, `stringingBeads Second ${userInput}variation`, `stringingBeads third variation ${userInput}`]},
                        {id: "safetyDirections", name: "Safety Directions",             result: [`${userInput} safetyDirections First variation`, `safetyDirections Second ${userInput}variation`, `safetyDirections third variation ${userInput}`]},
                        {id: "vocalImitation",   name: "Vocal Imitation",               result: [`${userInput} vocalImitation First variation`, `vocalImitation Second ${userInput}variation`, `vocalImitation third variation ${userInput}`]},
                        {id: "gmi",              name: "GMI",                           result: [`${userInput} gmi First variation`, `gmi Second ${userInput}variation`, `gmi third variation ${userInput}`]},
                        {id: "fmi",              name: "FMI",                           result: [`${userInput} fmi First variation`, `fmi Second ${userInput}variation`, `fmi third variation ${userInput}`]},
                        {id: "imWithObjects",    name: "IM W/ Objects",                 result: [`${userInput} imWithObjects First variation`, `imWithObjects Second ${userInput}variation`, `imWithObjects third variation ${userInput}`]},
                        {id: "attendanceSong",   name: "Attendance Song",               result: [`${userInput} attendanceSong First variation`, `attendanceSong Second ${userInput}variation`, `attendanceSong third variation ${userInput}`]},
                        {id: "napPrep",          name: "Nap Prep",                      result: [`${userInput} napPrep First variation`, `napPrep Second ${userInput}variation`, `napPrep third variation ${userInput}`]},
                        {id: "selfRegulation",   name: "Self-Regulation",               result: [`${userInput} selfRegulation First variation`, `selfRegulation Second ${userInput}variation`, `selfRegulation third variation ${userInput}`]},
                        {id: "toothbrushing",    name: "Toothbrushing",                 result: [`${userInput} toothbrushing First variation`, `toothbrushing Second ${userInput}variation`, `toothbrushing third variation ${userInput}`]},
                        {id: "reading",          name: "Reading",                       result: [`${userInput} reading First variation`, `reading Second ${userInput}variation`, `reading third variation ${userInput}`]},
                        {id: "art",              name: "Art",                           result: [`${userInput} art First variation`, `walking Second ${userInput}variation`, `art third variation ${userInput}`]},
                        {id: "communicatesNo",   name: "Communicates No",               result: [`${userInput} communicatesNo First variation`, `communicatesNo Second ${userInput}variation`, `communicatesNo third variation ${userInput}`]},
                        {id: "greetings",        name: "Responds to Greetings",         result: [`${userInput} greetings First variation`, `greetings Second ${userInput}variation`, `greetings third variation ${userInput}`]},
                        {id: "respondsToName",   name: "Responds to Name",              result: [`${userInput} respondsToName First variation`, `respondsToName Second ${userInput}variation`, `respondsToName third variation ${userInput}`]},
                        {id: "manding",          name: "Manding",                       result: [`${userInput} manding First variation`, `manding Second ${userInput}variation`, `manding third variation ${userInput}`]},
                        {id: "deniedAccess",     name: "Accepts Denied Access",         result: [`${userInput} deniedAccess First variation`, `deniedAccess Second ${userInput}variation`, `deniedAccess third variation ${userInput}`]},
                        {id: "gameplay",         name: "Gameplay",                      result: [`${userInput} gameplay First variation`, `gameplay Second ${userInput}variation`, `gameplay third variation ${userInput}`]},
                        {id: "timer",            name: "Timer",                         result: [`${userInput} timer First variation`, `timer Second ${userInput}variation`, `timer third variation ${userInput}`]},
                        {id: "jaInitiation",     name: "Join Attention: Init",          result: [`${userInput} jaInitiation First variation`, `jaInitiation Second ${userInput}variation`, `jaInitiation third variation ${userInput}`]},
                        {id: "relinquishing",    name: "Relinquishing",                 result: [`${userInput} relinquishing First variation`, `relinquishing Second ${userInput}variation`, `relinquishing third variation ${userInput}`]},
                        {id: "pecs",             name: "PECS",                          result: [`${userInput} pecs First variation`, `pecs Second ${userInput}variation`, `pecs third variation ${userInput}`]},
                        {id: "songGestures",     name: "Gestures During Song",          result: [`${userInput} songGestures First variation`, `songGestures Second ${userInput}variation`, `songGestures third variation ${userInput}`]},
                        {id: "chooseBtwnTwo",    name: "Choose Btwn Two",               result: [`${userInput} chooseBtwnTwo First variation`, `chooseBtwnTwo Second ${userInput}variation`, `chooseBtwnTwo third variation ${userInput}`]},
                        {id: "mandsMissing",     name: "Mands for Missing",             result: [`${userInput} mandsMissing First variation`, `mandsMissing Second ${userInput}variation`, `mandsMissing third variation ${userInput}`]},
                        {id: "peerRequests",     name: "Spont. Resp. to Peer Requests", result: [`${userInput} peerRequests First variation`, `peerRequests Second ${userInput}variation`, `peerRequests third variation ${userInput}`]},
                        {id: "smallGroups",      name: "Small Group Activites",         result: [`${userInput} smallGroups First variation`, `smallGroups Second ${userInput}variation`, `smallGroups third variation ${userInput}`]},
                        {id: "interval",         name: "Interval Data",                 result: [`${userInput} interval First variation`, `interval Second ${userInput}variation`, `interval third variation ${userInput}`]},
                        {id: "np",               name: "Non-Preferred Activites",       result: [`${userInput} np First variation`, `np Second ${userInput}variation`, `np third variation ${userInput}`]},


                        //BCBA PROGRAMS
                        {name: "bcba program", result: [`${userInput} First variation`, `Second ${userInput}variation`, `third variation ${userInput}`]},
];
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


//go to the next item in the array
//repeat until last item


////convert to percentages if prompted
/*
let convertToPercent = document.querySelector(`.${isPercentCheckbox}`).checked; // returns true or false
if (convertToPercent){ //convert to Integer 
    userInput = toString(parseInt(userInput) * 100) + "%";
}
*/
//last statement


//Loops through the program list to see if they're checked, extracts the information, and places it in the textbox.
//const generateButton = document.querySelector("#");


const programList = document.querySelectorAll(".programItem"); // programList = ["htmlElement with id Puzzle", "htmlElement with id ActivitySchedule"]
function generateNote() {
    let programId = ''; //temporarily store id value
    let selected = "";
    let resultArray = "";
    let randomNumber = 0;
    let programVariation = "";
    let i = 0, j = 0;
    for (i = 0; i < programList.length; i++) { // index 0 which is puzzle program
        
        programId = programList[i].id; //ex. walking
        selected = document.querySelector(`#${programId} > .selected > label > #input`).checked; // returns true or false
        if (selected) {
            j = 0;
            userInput = document.querySelector(`#${programId} > .userInput > .extractThisInput`).value; //Ex: return 2/15 or 4/10
            //console.log(userInput);
            //console.log(libraryOfPrograms[j]["id"]);
            while (programId !== libraryOfPrograms[j]["id"]) {//walking under index 2 our should be 2
                j++;
            }
            generateSentence(userInput, j);
            return userInput;
            
        }        
    }
    let textArea = document.querySelector("textarea");
    console.log(textArea);
    textArea.value = generatedNote;
    return generatedNote;
}  

// generateNote();
// console.log(generatedNote);
// console.log(userInput);
// generateNote();
// console.log(generatedNote);
// console.log(userInput);
// generateNote();
// console.log(generatedNote);
// console.log(userInput);
function generateSentence(userInput, j) {
    //console.log(userInput);
    resultArray = libraryOfPrograms[j]["result"]; // returns an array with sentences
    randomNumber = (Math.floor(Math.random() * Math.floor(resultArray.length)))

    programVariation = resultArray[randomNumber]; //returns one random sentence
    generatedNote += programVariation + " ";
    
}
/*let obj1 = {
    id: "puzzle",
    name: "Puzzle Game",
    result: //sentences
}
let obj2 = {
    id: "activitySchedule",
    name: "Activity Schedule",
    result: //sentences
}
Object.keys(obj1); // "id", "name", "result"
Object.values(obj1); // "puzzle", "Puzzle", "sentences"
obj1["name"]; //Puzzle Game

let libraryOfObjects = [obj1, obj2]
Object.values(libraryOfPrograms[1]["id"])*/



// add comment testing
