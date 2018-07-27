const personality = {
    general: [{
        personalityType: "personality type-Advocate INFJ",
        yesagree: "Advocates are creative, Insightful, Private",
        reason: "Those are all things I know about myself.",
        notagree: "Advocates are decisive and altruistic. They always need a cause. ",
        reason2: " I take a long time to make decisions. I very rarely take up causes."

    }],

    people: [{
        same: "Nelson Mandela, Alanis Morrisett",
        information: "these people are also considered to be Advocates"
    }],

    communication: [{

        withsib: "When communicating with my sib I would let them know the lines of communication are open and periodically check in.",
        withinstructors: "When communicating with instructors I like using slack and having them available in class to help",
        withTeam: "In team projects we have used slack and open discussion to communicate. That has been very effective"
    }],

}

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
    console.log(personalityList);
    newCards.innerHTML += `
       <div class="card">
                  <img class="card-img-top" src="https://i2.wp.com/www.lifereaction.com/wp-content/uploads/2017/06/infj-personality-purpose.jpg?fit=640%2C426&ssl=1" alt="Card image cap">
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
        for (const value of Object.values(currentObject)) {
            console.log(value);
            const fragment = document.createDocumentFragment();
            const list = document.createElement("ul");
            const listItem = document.createElement("li")

            listItem.textContent = `${value}`

            list.appendChild(listItem)
            fragment.appendChild(list)

            cardText.appendChild(fragment)
        }
    }
}



