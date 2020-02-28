const textArea = document.querySelector("textarea");
const resetInput = document.getElementsByTagName("input"); //used to reset input fields
const generateButton = document.querySelector("#generateNote");//generate note button
let name = document.querySelector("#username > .userInput > .extractThisInput"); // store name for Library templates
let gender = document.querySelector("#gender > .userInput > .extractThisInput");//store gender for Library templates
let userInput = "";
//let upperGender = (gender.value.charAt(0).toUpperCase() + gender);

//Variations
function saVariationOne(programN) {
    return (`${(toPercent(userInput))} of ${programN} components were scored as independent during this observation.`)
}

function saVariationTwo(name, programN){
    return (`${name} independently completed ${userInput} ${programN} components.`)
}

function saVariationThree(gender, programN){
    return (`${gender} completed ${userInput} ${programN} trials independently during session.`)
}

function randomVariation(name, gender, programName){
    return [`${(toPercent(userInput))} of ${programName} components were scored as independent during this observation.`,
            `${(toPercent(userInput))} of ${programName} trials were scored positively.`,
            `${(toPercent(userInput))} of ${programName} trials were recorded as positive.`,
            `${userInput} of ${programName} components were scored as independent during this observation.`,
            `${name} independently completed ${userInput} ${programName} components.`,
            `${gender} completed ${userInput} ${programName} trials independently during session.`,
            `${gender} completed ${userInput} ${programName} components with no additional prompting.`,
            `${userInput} ${programName} trials were scored positively.`,
            `${userInput} ${programName} components were recorded as independent.`,
            `${userInput} ${programName} components were scored as without prompting.`,
            `${name} independently completed ${(toPercent(userInput))} of ${programName} opportunities today.`,
            `${gender} independently completed ${(toPercent(userInput))} of ${programName} opportunities today.`,
            `${(toPercent(userInput))} of the ${programName} trials were scored positively.`,
            `${(toPercent(userInput))} of the ${programName} components were scored positively.`,
            `${(toPercent(userInput))} of the ${programName} opportunities were independently completed during session.`,
            `During ${programName} the learner independently completed an average of ${(toPercent(userInput))} of the components.`,
            `During ${programName} ${name} independently completed an average of ${(toPercent(userInput))} of the components.`,
            `During ${programName} ${gender} independently completed an average of ${(toPercent(userInput))} of the components.`,
            `${userInput} ${programName} trials were completed without additional prompting.`,
            `Throughout the session, ${(toPercent(userInput))} of ${programName} trials were scored in the absence of problem behavior.`
        ];
}

//This function returns an array of sentences of a matched id
//libraryOfPrograms has to have an id and at least one string in result; name is optional
function LibraryP(userInput, programId, name, gender){
    //handles a special case with "demeanor"
    if(programId == "demeanor" || programId == "purpose"){
        const specialCase = {
            //Demeanor Case
            smiling: [`The learner presented with a smile.`, `${name} greeted the therapist with a smile and enthusiastic greeting.`],
            frowning: [`${gender} was frowning`],
            crying: [`${gender} was crying`, `${gender} came in upset today`],
            //Purpose of the Session Case
            direct: [`The purpose of today's session was to provide direct therapy and implement skill acquisition and behavior decrease targets.`],
            pairing: [`pairing fill in`],
            generalization: [`generalization fill in`],
            
        }
        return specialCase[`${userInput}`];
    }
    libraryOfPrograms = [ 
        //RBT PROGRAMS
        // edit key "o" numerically to change order
        // type "exclude" to temporarily disable
        {o: 4, id: "puzzle",           name: "Puzzle",                  result: randomVariation(name, gender, "puzzle")},
        {o: 2, id: "activitySchedule", name: "Activity Schedule",       result: randomVariation(name, gender, "activity schedule")},
        {o: 1, id: "walking",          name: "Walking",                 result: randomVariation(name, gender, "walking")},
        {o: 3, id: "waiting",          name: "Waiting",                 result: randomVariation(name, gender, "waiting")},
        {o: 5, id: "cleanUp",          name: "Clean Up",                result: randomVariation(name, gender, "clean up")},
        {id: "safetyDirections", name: "Safety Directions",             result: randomVariation(name, gender, "safety directions")},
        {id: "sorting",          name: "Sorting",                       result: randomVariation(name, gender, "sorting")},
        {id: "stringingBeads",   name: "Stringing Beads",               result: randomVariation(name, gender, "stringing beads")},
        {id: "vocalImitation",   name: "Vocal Imitation",               result: randomVariation(name, gender, "vocal imitation")},
        {id: "gmi",              name: "GMI",                           result: randomVariation(name, gender, "GMI")},
        {id: "fmi",              name: "FMI",                           result: randomVariation(name, gender, "FMI")},
        {id: "imWithObjects",    name: "IM W/ Objects",                 result: randomVariation(name, gender, "imitation with objects")},
        {id: "attendanceSong",   name: "Attendance Song",               result: randomVariation(name, gender, "attendance song")},
        {id: "napPrep",          name: "Nap Prep",                      result: randomVariation(name, gender, "nap prep")},
        {id: "selfRegulation",   name: "Self-Regulation",               result: randomVariation(name, gender, "self-regulation")},
        {id: "toothbrushing",    name: "Toothbrushing",                 result: randomVariation(name, gender, "toothbrushing")},
        {id: "reading",          name: "Reading",                       result: randomVariation(name, gender, "reading")},
        {id: "art",              name: "Art",                           result: randomVariation(name, gender, "art skills")},
        {id: "communicatesNo",   name: "Communicates No",               result: randomVariation(name, gender, "communicates no")},
        {id: "greetings",        name: "Responds to Greetings",         result: randomVariation(name, gender, "responds to greetings")},
        {id: "respondsToName",   name: "Responds to Name",              result: randomVariation(name, gender, "responds to name")},
        {id: "manding",          name: "Manding",                       result: randomVariation(name, gender, "manding")},
        {id: "deniedAccess",     name: "Accepts Denied Access",         result: randomVariation(name, gender, "accepts denied access")},
        {id: "gameplay",         name: "Gameplay",                      result: randomVariation(name, gender, "gameplay")},
        {id: "timer",            name: "Timer",                         result: randomVariation(name, gender, "response to timer")},
        {id: "jaInitiation",     name: "Join Attention: Init",          result: randomVariation(name, gender, "joint attention: initialization")},
        {id: "relinquishing",    name: "Relinquishing",                 result: randomVariation(name, gender, "relinquishing")},
        {id: "pecs",             name: "PECS",                          result: randomVariation(name, gender, "PECS")},
        {id: "songGestures",     name: "Gestures During Song",          result: randomVariation(name, gender, "gestures during song")},
        {id: "chooseBtwnTwo",    name: "Choose Btwn Two",               result: randomVariation(name, gender, "choose between two items")},
        {id: "mandsMissing",     name: "Mands for Missing",             result: randomVariation(name, gender, "mands for missing objects")},
        {id: "peerRequests",     name: "Spont. Resp. to Peer Requests", result: randomVariation(name, gender, "spontaneous response to peer requests")},
        {id: "smallGroups",      name: "Small Group Activites",         result: randomVariation(name, gender, "small group activities")},
        {id: "interval",         name: "Interval Data",                 result: randomVariation(name, gender, "interval data")},
        {id: "np",               name: "Non-Preferred Activites",       result: randomVariation(name, gender, "non-preferred activites")},
        {id: "p",                name: "Preferred Activites",           result: randomVariation(name, gender, "preferred activites")},
        {id: "modelBuilding",    name: "Model Building",                result: randomVariation(name, gender, "model building")},
        
        //Purpose of Session
        {o: "disabled", id: "purpose", name: "Purpose of Session", result: []},
        //Opening Statement
        {id: "guests", name: "People Present During Session", result: [`${userInput} were present throughout session.`]},
    
    ];
    if(isGenerate){
        return libraryOfPrograms;//returns an array formatted for constructing html
    }
    else{
        let i = 0;
        while (programId !== libraryOfPrograms[i]["id"]) { i++; } //finds a match
        return libraryOfPrograms[i]["result"];//returns an array formatted for generateNote function
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