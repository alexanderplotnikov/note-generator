const textArea = document.querySelector("textarea");
const resetInput = document.getElementsByTagName("input"); //used to reset input fields
const generateButton = document.querySelector("#generateNote");//generate note button
let name = document.querySelector("#username > .userInput > .extractThisInput"); // store name for Library templates
let gender = document.querySelector("#gender > .userInput > .extractThisInput");//store gender for Library templates
let userInput = "";

//This function returns an array of sentences of a matched id
//libraryOfPrograms has to have an id and at least one string in result; name is optional
function LibraryP(userInput, programId, name, gender){
    //handels a special case with "demeanor"
    if(programId == "demeanor"){
        const demenorCase = {
            smiling: [`${gender} was smiling`, `${gender} came in happy today`],
            frowning: [`${gender} was frowning`],
            crying: [`${gender} was crying`, `${gender} came in upset today`],
        }
        return demenorCase[`${userInput}`];
    }
    libraryOfPrograms = [ 
        //RBT PROGRAMS
        // edit key "o" numerically to change order
        // type "exclude" to temporarily disable
        {o: 4, id: "puzzle",           name: "Puzzle",                        result: [`${(toPercent(userInput))} puzzle First variation and then ${gender} wrote `, `puzzle ${name}Second ${userInput} variation`, `puzzle third variation ${userInput}`]},
        {o: 2, id: "activitySchedule", name: "Activity Schedule",             result: [`${userInput} schedule First variation`, `schedule Second ${userInput}variation`, `schedule third variation ${userInput}`]}, 
        {o: 1, id: "walking",          name: "Walking",                       result: [`${userInput} walking First variation`, `walking Second ${userInput}variation`, `walking third variation ${userInput}`]},
        {o: 3, id: "waiting",          name: "Waiting",                       result: [`${userInput} waiting First variation`, `waiting Second ${userInput}variation`, `waiting third variation ${userInput}`]},
        {o: 5, id: "cleanUp",          name: "Clean Up",                      result: [`${userInput} cleanUp First variation`, `cleanUp Second ${userInput}variation`, `cleanUp third variation ${userInput}`]},
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
        
        //Purpose of Session
        {o: "disabled", id: "purpose", name: "Purpose of Session", result: [`Purpose of the session is ${userInput}`]},
        //Opening Statement
        {id: "guests", name: "People Present During Session", result: [`People Present During Session were: ${userInput}`]},
    ];
    if(isGenerate){
        return libraryOfPrograms;//returns an array formatted for constructing html
    }
    else{
        let i = 0;
        while (programId !== libraryOfPrograms[i]["id"]) { i++; } //finds a match
        return libraryOfPrograms[i]["result"];
    }
    
}

/*
<div id="programList">  append everything below to this div
<h1 class="category">Skill Acquisition</h1>
<div class = "programItem title" id = "puzzle">
    <div class = "selected">
        <label><input type="checkbox">Puzzle</label> 
    </div>
    <div class="userInput">
        <input class = "extractThisInput" type="text">
    </div>
</div>
*/
//html automation
//
let isGenerate;
function generateHtml(){
    isGenerate = true; // makes sure library returns an array formated for constructing html
    let libraryArray = new LibraryP(userInput, isGenerate);
    libraryArray.sort((a, b) => a["o"] - b["o"]);//sorts an array in order according to "o" values
    console.log(libraryArray);
  
    for (let i = 0; i < libraryArray.length; i++){
        if(libraryArray[i]["o"] == "disabled"){
            continue; // excludes items from html with "disabled" tag in LibraryP
        }
        //instructions to add a class or any other attribute
        //make a variable for new attribute; assign a value to the newly created attribute
        //set attribute to an element
        //append element to parent
        let mainNode = document.querySelector("#programList");
        let label = document.createElement("LABEL");
        let input = document.createElement("INPUT");
        let divParent = document.createElement("DIV");
        let divSelected = document.createElement("DIV");
        let divUserInput = document.createElement("DIV");
        let extractInput = document.createElement("INPUT");
        let attrType = document.createAttribute("type"); attrType.value = "checkbox";
        let attrClassSelected = document.createAttribute("class"); attrClassSelected.value = "selected";
        let attrClassProgramItem = document.createAttribute("class"); attrClassProgramItem.value = "programItem";
        let attrIdProgramId = document.createAttribute("id"); attrIdProgramId.value = `${libraryArray[i]["id"]}`;//variable ID
        let attrTypeText = document.createAttribute("type"); attrTypeText.value = "text";
        let attrClassExtract = document.createAttribute("class"); attrClassExtract.value = "extractThisInput";
        let attrClassUserInput = document.createAttribute("class"); attrClassUserInput.value = "userInput";
        
        divParent.setAttributeNode(attrClassProgramItem);
        divParent.setAttributeNode(attrIdProgramId);
        divSelected.setAttributeNode(attrClassSelected);
        input.setAttributeNode(attrType);
        label.appendChild(input);
        label.append(`${libraryArray[i]["name"]}`); //variable NAME
        divSelected.appendChild(label);
        divParent.appendChild(divSelected);
    
        extractInput.setAttributeNode(attrTypeText);
        extractInput.setAttributeNode(attrClassExtract);
        divUserInput.setAttributeNode(attrClassUserInput);
        divUserInput.appendChild(extractInput);
        divParent.appendChild(divUserInput);
        mainNode.appendChild(divParent);
    }
}
generateHtml();
//Main functions
//loops through libraryOfPrograms and only outputs selected programs
function generateNote(usrname, usrgender) {
    let programList = document.querySelectorAll(".programItem");
    console.log(programList)
    isGenerate = false;
    let generatedNote = ""; // resets a note
    let programId; //temporarily store id value
    let selected;
    let randomNumber = 0;
    for (let i = 0; i < programList.length; i++) { 
        programId = programList[i].id;
        selected = document.querySelector(`#${programId} > .selected > label > input`).checked; // returns true or false
        if (selected) { // if checked
            userInput = document.querySelector(`#${programId} > .userInput > .extractThisInput`).value; //extracts user's input
            if (userInput == ""){// alternative method: a function that toggles a class Error and changes border color to red
                alert(`missing information for ${programId}`);
                break;//or use continue?; continue prompts an error, but then continues with note generation
            }
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
    for (let i=0; i < resetInput.length; i++) {
        resetInput[i].value = "";
        resetInput[i].checked = false;
    }
}

//resetInputField();
//apply this function directly in projectOfLibrary array Ex. ${toPercent(userInput)}
function toPercent(input){
    input = input.split("/");
    return Math.round(input[0] / input[1] * 100) + "%";
}
    
//Event listeners
generateButton.addEventListener("click", () => {
    usrname = name.value.trim();//use trim to erase white spaces Ex. "   " returns ""
    usrgender = gender.value;
    if(usrname == ""){
        alert("missing name");
    }
    else if(usrgender == "novalue"){
        alert("missing gender");
    }
    else{
        usrname = usrname[0].toUpperCase() + usrname.slice(1).toLowerCase(); //ensures name capitalization
        generateNote(usrname, usrgender);
    } 
});