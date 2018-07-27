const personality = {
    general: {
       personalityType: [
            "personality type-INFJ",
            "This personality type is the Advocate"
    ],

    agree: [
         "Advocates are creative, insightful, yet private people.",
         "I agree with this evaluation"
        
    ],
    disagree: [
         "Advocates are decisive and altruistic. They always need a cause. ",
         " I take a long time to make decisions. I very rarely take up causes."

    ],

    people: [
         "Nelson Mandela, Alanis Morrisett"

    ],

    communication: [

         "When communicating with my sib I would let them know the lines of communication are open and periodically check in.",
         "When communicating with instructors I like using slack and having them available in class to help",
         "In team projects we have used slack and open discussion to communicate. That has been very effective"
    ],
}
};



//creating function "name" is the name of the function-parameters=what I'm passing the personality object through 
//and what I'm assign the string name through.
//what is inside of the curly brackets makes the objects into a string


const profile = function (databaseObject, keyName) {
    const personalityString = JSON.stringify(databaseObject);
    localStorage.setItem(keyName, personalityString);
}

//use function name (object name that you are passing through (personality), "key" ( new made up name))


profile(personality, "personalityKey");



const personalitySection = localStorage.getItem("personalityKey");
const data = JSON.parse(personalitySection);
console.log(data);


let newCards = document.querySelector(".card-group")
    for (let personalityList in data) {
      console.log(personalityList) ;
       newCards.innerHTML += `
       <div class="card">
                  <img class="card-img-top" src="" alt="Card image cap">
                  <div class="card-body" id ="card1">
                    <h5 class="card-title">${personalityList}</h5>
                    <p class="card-text" id=${personalityList}></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>`
        let cardText = document.getElementById(`${personalityList}`)
        for (let i = 0; i < data[personalityList].length; i++) {
            const currentObject = data[personalityList][i];
            console.log(currentObject);



            // tagging the list and the elements that go inside are list items
            const fragment = document.createDocumentFragment("div");
            //get the element-create an id in the ul tag the child is the li 
            //named ultag then go into the HTML (innerHTML) then the new constant called currentObject
           const list = document.createElement("ul");
            const listItem = document.createElement("li")

            listItem.textContent = `${currentObject.personalityType}`;
            // `${currentObject.personalityType},${currentObject.yesAgree},${currentObject.reason},
            // ${currentObject.notAgree},${currentObject.disagreeReason}`;
            list.appendChild(listItem)
            fragment.appendChild(list)

            document.getElementById("card1").appendChild(fragment)
            //const cardtwo = document.createElement("p")
            //get the element-create an id in the ul tag the child is the li 
            //named ultag then go into the HTML (innerHTML) then the new constant called currentObject
            // document.getElementById("card2").appendChild(cardtwo).innerHTML =
            //  `${currentObject.same}`;

            //  const cardthree = document.createElement("p")
            //  document.getElementById("card3").appendChild(cardthree).innerHTML =
            //  ` ${currentObject.withsib}, ${currentObject.withinstructors},${currentObject.withTeam}`;

        };
    }

















