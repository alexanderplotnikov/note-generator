const programList = document.querySelectorAll(".programItem");
const textArea = document.querySelector("textarea");
const resetInput = document.getElementsByTagName("input"); //used to reset input fields
const generateButton = document.querySelector("#generateNote");//generate note button
let name = document.querySelector("#username > .userInput > .extractThisInput"); // store name for Library templates
let gender = document.querySelector("#gender > .userInput > .extractThisInput");//store gender for Library templates
let userInput;

//This function returns an array of sentences of a matched id
//libraryOfPrograms has to have an id and at least one string in result; name is optional
function LibraryP(userInput, programId, name, gender){
    this.name = name;
    this.gender = gender;
    this.programId = programId;
    this.userInput = userInput;
    if(programId == "demeanor"){
        const demenorCase = {
            smiling: [`${gender} was smiling`, `${gender} came in happy today`],
            frowning: [`${gender} was frowning`],
            crying: [`${gender} was crying`, `${gender} came in upset today`],
        }
        return demenorCase[`${userInput}`];
    }
    this.libraryOfPrograms = [ 
        //RBT PROGRAMS
        {id: "puzzle",           name: "Puzzle",                        result: [`${(userInput)} puzzle First variation and then ${gender} wrote `, `puzzle ${name}Second ${userInput} variation`, `puzzle third variation ${userInput}`]},
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
    
        //Opening Statement
        {id: "guests", name: "People Present During Session", result: [`People Present During Session were: ${userInput}`]},
    ];
    let i = 0;
    while (programId !== this.libraryOfPrograms[i]["id"]) { i++; } //finds a match
    return this.libraryOfPrograms[i]["result"];
}

//Main functions
//loops through libraryOfPrograms and only outputs selected programs
function generateNote(usrname, usrgender) {
    let generatedNote = ""; // resets a note
    let programId; //temporarily store id value
    let selected;
    let randomNumber = 0;
    for (let i = 0; i < programList.length; i++) { 
        programId = programList[i].id;
        selected = document.querySelector(`#${programId} > .selected > label > #input`).checked; // returns true or false
        if (selected) { // if checked
            userInput = document.querySelector(`#${programId} > .userInput > .extractThisInput`).value; //extracts user's input
            let resultArray = new LibraryP(userInput, programId, usrname, usrgender); //updates programs Library with new userInput
            randomNumber = (Math.floor(Math.random() * Math.floor(resultArray.length)))//generates random number
            generatedNote += resultArray[randomNumber] + " ";
        }
    }
    textArea.value = generatedNote; //updates textarea field with the generated note 
}  

//Helper functions
//resets input fields on Page Reload
function resetInputField(){
    for (let ii=0; ii < resetInput.length; ii++) {
        resetInput[ii].value = "";
        resetInput[ii].checked = false;
    }
}
//resetInputField();
//convert to percentages if prompted (OPTIONAL FEATURE)

// function toPercent(input){
//     console.log(input.split(""));
//     let arr = [];
//     input = input.split("");
//     for (let each in input){
//         if( elem != "/"){
//             arr[each]
//         }
//     }

// }
    



//Event listeners
generateButton.addEventListener("click", () => {
    usrname = name.value;
    usrgender = gender.value;
    generateNote(usrname, usrgender);
});