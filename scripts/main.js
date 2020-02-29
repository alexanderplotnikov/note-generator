const textArea = document.querySelector("textarea");
const resetInput = document.getElementsByTagName("input"); //used to reset input fields
const generateButton = document.querySelector("#generateNote");//generate note button
let name = document.querySelector("#username > .userInput > .extractThisInput"); // store name for Library templates
let gender = document.querySelector("#gender > .userInput > .extractThisInput");//store gender for Library templates
let userInput = "";
//Variations
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

//Behaviors Targeted for Decrease Sentence Variations (Problem Behavior)
function problemVariation(name, gender, problemName) {
    return [
        `The learner engaged in ${userInput} episodes of ${problemName} during session.`,
        `The learner engaged in ${userInput} episodes of ${problemName}.`,
        `${name} engaged in ${userInput} episodes of ${problemName} during session.`,
        `${name} engaged in ${userInput} episodes of ${problemName}.`,
        `${gender} engaged in ${userInput} episodes of ${problemName} during session.`,
        `${gender} engaged in ${userInput} episodes of ${problemName}.`,

    ]
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
        //Skill Acquisition PROGRAMS
        // edit key "o" numerically to change order
        // type "exclude" to temporarily disable
        {id: "CactivitySchedule", name: "Activity Schedule",             result: randomVariation(name, gender, "activity schedule"), header: "Skill Acquisition",},
        {id: "Cpuzzle",           name: "Puzzle",                        result: randomVariation(name, gender, "puzzle",)},
        {id: "Cwalking",          name: "Walking",                       result: randomVariation(name, gender, "walking")},
        {id: "Cwaiting",          name: "Waiting",                       result: randomVariation(name, gender, "waiting")},
        {id: "CcleanUp",          name: "Clean Up",                      result: randomVariation(name, gender, "clean up")},
        {id: "CsafetyDirections", name: "Safety Directions",             result: randomVariation(name, gender, "safety directions")},
        {id: "Csorting",          name: "Sorting",                       result: randomVariation(name, gender, "sorting")},
        {id: "CstringingBeads",   name: "Stringing Beads",               result: randomVariation(name, gender, "stringing beads")},
        {id: "CvocalImitation",   name: "Vocal Imitation",               result: randomVariation(name, gender, "vocal imitation")},
        {id: "Cgmi",              name: "GMI",                           result: randomVariation(name, gender, "GMI")},
        {id: "Cfmi",              name: "FMI",                           result: randomVariation(name, gender, "FMI")},
        {id: "CimWithObjects",    name: "IM W/ Objects",                 result: randomVariation(name, gender, "imitation with objects")},
        {id: "CattendanceSong",   name: "Attendance Song",               result: randomVariation(name, gender, "attendance song")},
        {id: "CnapPrep",          name: "Nap Prep",                      result: randomVariation(name, gender, "nap prep")},
        {id: "CselfRegulation",   name: "Self-Regulation",               result: randomVariation(name, gender, "self-regulation")},
        {id: "Ctoothbrushing",    name: "Toothbrushing",                 result: randomVariation(name, gender, "toothbrushing")},
        {id: "Creading",          name: "Reading",                       result: randomVariation(name, gender, "reading")},
        {id: "Cart",              name: "Art",                           result: randomVariation(name, gender, "art skills")},
        {id: "CcommunicatesNo",   name: "Communicates No",               result: randomVariation(name, gender, "communicates no")},
        {id: "Cgreetings",        name: "Responds to Greetings",         result: randomVariation(name, gender, "responds to greetings")},
        {id: "CrespondsToName",   name: "Responds to Name",              result: randomVariation(name, gender, "responds to name")},
        {id: "Cmanding",          name: "Manding",                       result: randomVariation(name, gender, "manding")},
        {id: "CdeniedAccess",     name: "Accepts Denied Access",         result: randomVariation(name, gender, "accepts denied access")},
        {id: "Cgameplay",         name: "Gameplay",                      result: randomVariation(name, gender, "gameplay")},
        {id: "Ctimer",            name: "Timer",                         result: randomVariation(name, gender, "response to timer")},
        {id: "CjaInitiation",     name: "Join Attention: Init",          result: randomVariation(name, gender, "joint attention: initialization")},
        {id: "Crelinquishing",    name: "Relinquishing",                 result: randomVariation(name, gender, "relinquishing")},
        {id: "Cpecs",             name: "PECS",                          result: randomVariation(name, gender, "PECS")},
        {id: "CsongGestures",     name: "Gestures During Song",          result: randomVariation(name, gender, "gestures during song")},
        {id: "CchooseBtwnTwo",    name: "Choose Btwn Two",               result: randomVariation(name, gender, "choose between two items")},
        {id: "CmandsMissing",     name: "Mands for Missing",             result: randomVariation(name, gender, "mands for missing objects")},
        {id: "CpeerRequests",     name: "Spont. Resp. to Peer Requests", result: randomVariation(name, gender, "spontaneous response to peer requests")},
        {id: "CsmallGroups",      name: "Small Group Activites",         result: randomVariation(name, gender, "small group activities")},
        {id: "Cinterval",         name: "Interval Data",                 result: randomVariation(name, gender, "interval data")},
        {id: "Cnp",               name: "Non-Preferred Activites",       result: randomVariation(name, gender, "non-preferred activites")},
        {id: "Cp",                name: "Preferred Activites",           result: randomVariation(name, gender, "preferred activites")},
        {id: "CmodelBuilding",    name: "Model Building",                result: randomVariation(name, gender, "model building")},
        //Behaviors Targeted for Decrease
        {id: "Haggression",       name: "Aggression",                    result: problemVariation(name, gender, "aggression"), header: "Behaviors Targeted for Decrease",},
        {id: "Hthrowing",         name: "Throwing",                      result: problemVariation(name, gender, "throwing")},
        {id: "Hcrying",           name: "Crying",                        result: problemVariation(name, gender, "crying")},
        {id: "Hnon-compliance",   name: "Non-Compliance",                result: problemVariation(name, gender, "non-compliance")},
        {id: "Htantrum",          name: "Tantrum",                       result: problemVariation(name, gender, "tantrum")},
        {id: "Hwhining",          name: "Whining",                       result: problemVariation(name, gender, "whining")},
        {id: "Hflopping",         name: "Flopping",                      result: problemVariation(name, gender, "flopping")},
        {id: "Hsib",              name: "SIB",                           result: problemVariation(name, gender, "SIB")},
        {id: "Hkicking",          name: "Kicking",                       result: problemVariation(name, gender, "kicking")},
        {id: "Hyelling",          name: "Yelling",                       result: problemVariation(name, gender, "yelling")},
        {id: "HhittingOthers",    name: "Hitting Others",                result: problemVariation(name, gender, "hitting others")},
        {id: "Hscripting",        name: "Scripting",                     result: problemVariation(name, gender, "scripting")},
        {id: "Hmouthing",         name: "Mouthing",                      result: problemVariation(name, gender, "mouthing")},
        {id: "HhittingSelf",      name: "Hitting Self",                  result: problemVariation(name, gender, "hitting self")},
        {id: "Hbiting",           name: "Biting",                        result: problemVariation(name, gender, "biting")},
        {id: "Hspitting",         name: "Spitting",                      result: problemVariation(name, gender, "spitting")},
        {id: "Hdumping",          name: "Dumping",                       result: problemVariation(name, gender, "dumping")},
        {id: "Hdisrobing",        name: "Disrobing",                     result: problemVariation(name, gender, "disrobing")},
        //Closer
        {id: "Kpretest",           name: "Pretest Run?",                  result: problemVariation(name, gender, "pretest")},
        {id: "KnewPrograms",       name: "New Programs Run?",             result: problemVariation(name, gender, "new programs")},
        {id: "KprogramRevisions",  name: "Program Revisions?",            result: problemVariation(name, gender, "program revisions")},
        {id: "KgeneralizationProbes", name: "Generalization Probes?",     result: problemVariation(name, gender, "generalizationProbes")},
        {id: "KnewTargets",        name: "New Targets?",                  result: problemVariation(name, gender, "new targets")},
        {id: "Kmaintenance",       name: "Maintenance?",                  result: problemVariation(name, gender, "maintenance")},
        {id: "KnewMotivationalSystem", name: "New Motivational System?",  result: problemVariation(name, gender, "new motivational system")},
        {id: "KcriticalInformation", name: "Any Critical Info?",   result: problemVariation(name, gender, "critical info"), header: "Closer",},

        //Purpose of Session
        {o: "disabled", id: "purpose", name: "Purpose of Session", result: []},
        //Opening Statement
        {o: "disabled", id: "guests", name: "People Present During Session", result: [`${userInput} were present throughout session.`]},
    
    ];
    if(isGenerate){
        return libraryOfPrograms;//returns an array formatted for constructing html
    }
    else{
        console.log(programId);
        

        let i = 0;
        while (programId !== libraryOfPrograms[i]["id"]) { console.log(libraryOfPrograms[i]["id"]);i++; } //finds a match
        return libraryOfPrograms[i]["result"];
    }
    
}

/*
<div id="programList">  append everything below to this div
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
let isGenerate;
function generateHtml(){
    isGenerate = true; // makes sure library returns an array formated for constructing html
    let libraryArray = new LibraryP(userInput, isGenerate);
    libraryArray.sort((a, b) => {
        if(a["id"] > b["id"]){
            return 1;
        }
        if(a["id"] < b["id"]){
            return -1;
        }
        return 0;
        
    });//sorts an array in alphabetic order
  
    for (let i = 0; i < libraryArray.length; i++){
        let mainNode = document.querySelector("#programList");
        let header = document.createElement("H1");
        if(libraryArray[i].hasOwnProperty("header")){
            header.className = "category";
            header.innerHTML = `${libraryArray[i]["header"]}`
            mainNode.appendChild(header)
        }
        if(libraryArray[i]["o"] == "disabled"){
            continue; // excludes items from html with "disabled" tag in LibraryP
        }
    
        //instructions to add a class or any other attribute
        //make a variable for new attribute; assign a value to the newly created attribute
        //set attribute to an element
        //append element to parent
        
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
                alert(`missing information for ${programId.substr(1)}`);
                break;//or use continue?; continue prompts an error, but then continues with note generation
            }
            let resultArray = new LibraryP(userInput, programId, usrname, usrgender); //updates programs Library with new userInput
            randomNumber = (Math.floor(Math.random() * Math.floor(resultArray.length)))//generates random number
            if(resultArray[randomNumber].charAt(0) == "h" || resultArray[randomNumber].charAt(0) == "s"){
                generatedNote += resultArray[randomNumber].charAt(0).toUpperCase() + resultArray[randomNumber].substr(1) + " ";    
            }
            else{
                generatedNote += resultArray[randomNumber] + " ";  
            }
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