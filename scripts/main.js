const textArea = document.querySelector("textarea");
const resetInput = document.getElementsByTagName("input"); //used to reset input fields
const generateButton = document.querySelector("#generateNote");//generate note button
let name = document.querySelector("#username > .userInput > .extractThisInput"); // store name for Library templates
let gender = document.querySelector("#gender > .userInput > .extractThisInput");//store gender for Library templates
let userInput = "";

//Variations
function saVariationOne(programN) {
    return (`${(toPercent(userInput))} of ${programN} components were scored as indepedent during this observation.`)
}

function saVariationTwo(programN){
    return (`${name} independently completed ${userInput} ${programN} components.`)
}

function saVariationThree(programN){
    return (`${gender} completed ${userInput} ${programN} trials independently during session.`)
}


//This function returns an array of sentences of a matched id
//libraryOfPrograms has to have an id and at least one string in result; name is optional
function LibraryP(userInput, programId, name, gender){
    //handles a special case with "demeanor"
    if(programId == "demeanor"){
        const demenorCase = {
            smiling: [`The learner presented with a smile.`, `${name} greeted the therapist with a smile and enthusiastic greeting.`],
            frowning: [`${gender} was frowning`],
            crying: [`${gender} was crying`, `${gender} came in upset today`],
        }
        return demenorCase[`${userInput}`];
    }
    libraryOfPrograms = [ 
        //RBT PROGRAMS
        // edit key "o" numerically to change order
        // type "exclude" to temporarily disable
        {o: 4, id: "puzzle",           name: "Puzzle",                  result: [`${saVariationOne("puzzle")}`, `${saVariationTwo("puzzle")}`, `${saVariationThree("puzzle")}`]},
        {o: 2, id: "activitySchedule", name: "Activity Schedule",       result: [`${saVariationOne("activity schedule")}`, `${saVariationTwo("activity schedule")}`, `${saVariationThree("activity schedule")}`]}, 
        {o: 1, id: "walking",          name: "Walking",                 result: [`${saVariationOne("walking")}`, `${saVariationTwo("walking")}`, `${saVariationThree("walking")}`]},
        {o: 3, id: "waiting",          name: "Waiting",                 result: [`${saVariationOne("waiting")}`, `${saVariationTwo("waiting")}`, `${saVariationThree("waiting")}`]},
        {o: 5, id: "cleanUp",          name: "Clean Up",                result: [`${saVariationOne("clean up")}`, `${saVariationTwo("clean up")}`, `${saVariationThree("clean up")}`]},
        {id: "safetyDirections", name: "Safety Directions",             result: [`${saVariationOne("safety directions")}`, `${saVariationTwo("safety directions")}`, `${saVariationThree("safety directions")}`]},
        {id: "sorting",          name: "Sorting",                       result: [`${saVariationOne("sorting")}`, `${saVariationTwo("sorting")}`, `${saVariationThree("sorting")}`]},
        {id: "stringingBeads",   name: "Stringing Beads",               result: [`${saVariationOne("stringing beads")}`, `${saVariationTwo("stringing beads")}`, `${saVariationThree("stringing beads")}`]},
        {id: "vocalImitation",   name: "Vocal Imitation",               result: [`${saVariationOne("vocal imitation")}`, `${saVariationTwo("vocal imitation")}`, `${saVariationThree("vocal imitation")}`]},
        {id: "gmi",              name: "GMI",                           result: [`${saVariationOne("GMI")}`, `${saVariationTwo("GMI")}`, `${saVariationThree("GMI")}`]},
        {id: "fmi",              name: "FMI",                           result: [`${saVariationOne("FMI")}`, `${saVariationTwo("FMI")}`, `${saVariationThree("FMI")}`]},
        {id: "imWithObjects",    name: "IM W/ Objects",                 result: [`${saVariationOne("imitation with objects")}`, `${saVariationTwo("imitation with objects")}`, `${saVariationThree("imitation with objects")}`]},
        {id: "attendanceSong",   name: "Attendance Song",               result: [`${saVariationOne("attendance song")}`, `${saVariationTwo("attendance song")}`, `${saVariationThree("attendance song")}`]},
        {id: "napPrep",          name: "Nap Prep",                      result: [`${saVariationOne("nap prep")}`, `${saVariationTwo("nap prep")}`, `${saVariationThree("nap prep")}`]},
        {id: "selfRegulation",   name: "Self-Regulation",               result: [`${saVariationOne("self-regulation")}`, `${saVariationTwo("self-regulation")}`, ``]},
        {id: "toothbrushing",    name: "Toothbrushing",                 result: [`${saVariationOne("toothbrushing")}`, `${saVariationTwo("toothbrushing")}`, `${saVariationThree("toothbrushing")}`]},
        {id: "reading",          name: "Reading",                       result: [`${saVariationOne("reading")}`, `${saVariationTwo("reading")}`, `${saVariationThree("reading")}`]},
        {id: "art",              name: "Art",                           result: [`${saVariationOne("art skills")}`, `${saVariationTwo("art skills")}`, `${saVariationThree("art skills")}`]},
        {id: "communicatesNo",   name: "Communicates No",               result: [`${saVariationOne("communicates no")}`, `${saVariationTwo("communicates no")}`, `${saVariationThree("communicates no")}`]},
        {id: "greetings",        name: "Responds to Greetings",         result: [`${saVariationOne("responds to greetings")}`, `${saVariationTwo("responds to greetings")}`, `${saVariationThree("responds to greetings")}`]},
        {id: "respondsToName",   name: "Responds to Name",              result: [`${saVariationOne("responds to name")}`, `${saVariationTwo("responds to name")}`, `${saVariationThree("responds to name")}`]},
        {id: "manding",          name: "Manding",                       result: [`${saVariationOne("manding")}`, `${saVariationTwo("manding")}`, `manding third variation ${userInput}`]},
        {id: "deniedAccess",     name: "Accepts Denied Access",         result: [`${saVariationOne("accepts denied access")}`, `${saVariationTwo("accepts denied access")}`, `deniedAccess third variation ${userInput}`]},
        {id: "gameplay",         name: "Gameplay",                      result: [`${saVariationOne("gameplay")}`, `${saVariationTwo("gameplay")}`, `${saVariationThree("gameplay")}`]},
        {id: "timer",            name: "Timer",                         result: [`${saVariationOne("responding to timer")}`, `${saVariationTwo("responding to timer")}`, `${saVariationThree("responding to timer")}`]},
        {id: "jaInitiation",     name: "Join Attention: Init",          result: [`${saVariationOne("joint attention: initiation")}`, `${saVariationTwo("joint attentio: initiation")}`, `${saVariationThree("joint attention: initiation")}`]},
        {id: "relinquishing",    name: "Relinquishing",                 result: [`${saVariationOne("relinquishing")}`, `${saVariationTwo("relinquishing")}`, `${saVariationThree("relinquishing")}`]},
        {id: "pecs",             name: "PECS",                          result: [`${saVariationOne("PECS")}`, `${saVariationTwo("PECS")}`, `${saVariationThree("PECS")}`]},
        {id: "songGestures",     name: "Gestures During Song",          result: [`${saVariationOne("gestures during song")}`, `${saVariationTwo("gestures during song")}`, `${saVariationThree("gestures during song")}`]},
        {id: "chooseBtwnTwo",    name: "Choose Btwn Two",               result: [`${saVariationOne("choose between two items")}`, `${saVariationTwo("choose between two items")}`, `${saVariationThree("choose between to items")}`]},
        {id: "mandsMissing",     name: "Mands for Missing",             result: [`${saVariationOne("mands for missing objects")}`, `${saVariationTwo("mands for missing objects")}`, `${saVariationThree("mands for missing objects")}`]},
        {id: "peerRequests",     name: "Spont. Resp. to Peer Requests", result: [`${saVariationOne("spontaneous response to peer requests")}`, `${saVariationTwo("spontaneous response to peer requests")}`, `${saVariationThree("spontaneous response tp peer requests")}`]},
        {id: "smallGroups",      name: "Small Group Activites",         result: [`${saVariationOne("small group activites")}`, `${saVariationTwo("small group activites")}`, `${saVariationThree("small group activities")}`]},
        {id: "interval",         name: "Interval Data",                 result: [`interval data`, `${saVariationTwo("interval data")}`, `${saVariationThree("interval data")}`]},
        {id: "np",               name: "Non-Preferred Activites",       result: [`non-preferred activites`, `${saVariationTwo("non-preferred activites")}`, `${saVariationThree("non-preferred activities")}`]},
        
        //Purpose of Session
        {o: "disabled", id: "purpose", name: "Purpose of Session", result: [`The purpose of today's session was to ${userInput}.`]},
        //Opening Statement
        {id: "guests", name: "People Present During Session", result: [`${userInput} were present throughout session.`]},
    
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


console.log(name)

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