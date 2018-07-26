const personality = {
    general: [{
        type: "personality type-Advocate INFJ"
    },

    agree = {
        yesagree: "Advocates are creative, Insightful, Private",
        reason: "Those are all things I know about myself."
    },
    disagree = {
        notagree: "Advocates are decisive and altruistic. They always need a cause. ",
        reason2: " I take a long time to make decisions. I very rarely take up causes.",

    },

    people = {
        same: ""

    },

    communication = {

        withsib: "When communicating with my sib I would let them know the lines of communication are open and periodically check in.",
        withinstructors: "When communicating with instructors I like using slack and having them available in class to help",
        withTeam: "In tema projects we have used slack and open discussion to communicate. That has been very effective"
    },
    ]
}


//creating function "name" is the name of the function-parameters=what I'm passing the personality object through 
//and what I'm assign the string name through.
//what is inside of the curly brackets makes the objects into a string


const profile = function (databaseObject, keyName) {
    const personalityString = JSON.stringify(personality);
    localStorage.setItem(keyName, personalityString);
}

//use function name (object name that you are passing through (personality), "key" ( new made up name))


profile(personality, "personalityKey");

 const personalitySection = localStorage.getItem("personalityKey");
 let data = JSON.parse(personalitySection);



for (let personalityList in data) {
    for (let i = 0; i < data[personalityList].length; i++) {
        const currentObject = data[personalityList][i];
        console.log(currentObject);
        // tagging the list and the elements that go inside are list items
                const ultag = document.createElement("li")
        //get the element-create an id in the ul tag the child is the li 
        //named ultag then go into the HTML (innerHTML) then the new constant called currentObject
        document.getElementById("personalityList").appendChild(ultag).innerHTML =
            `${currentObject.type}, ${currentObject.yesAgree}, ${currentObject.reason},
             ${currentObject.notagree}, ${currentObject.reason2}, ${currentObject.same},
             ${currentObject.withsib}, ${currentObject.withinstructors},${currentObject.withTeam}`;

    };
}

























    
