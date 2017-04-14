var inquirer = require('inquirer');
// core node package for reading and writing files
var fs = require('fs');
var request = require('request');

// --------------------------------------------------------------------------------------------------
// Create a BasicCard constructor. It should accept front and back arguments.
// constructor(parameters)
//property = value
function BasicCard(front, back) {
    if (!this instanceof BasicCard) {
        this.front = front;
        this.back = back;

    } else {
        return new BasicCard(front, back);
    }
}

BasicCard.prototype.printBasicCard = function() {
    console.log("Question: " + this.front + "\nAnswer: " + this.back);
};

// ClozeCard Constructor-----------------------------------------------------------------------------------------------------------------------
function ClozeCard(fulltext, cloze) {
    if (!this instanceof ClozeCard) {
        this.partial = text.replace(cloze, "_____")
        this.cloze = cloze;
        this.fulltext = fulltext;
    }
    return new ClozeCard(fulltext, cloze);
}
//ClozeCard prototypes--------------------------------------------------------------------------------------------------------------
ClozeCard.prototype.printPartialCard = function() {
    console.log("Partial sentence: " + this.partial);
}
ClozeCard.prototype.printClozeCard = function() {
    console.log("Cloze: " + this.cloze);
}
ClozeCard.prototype.printFullCard = function() {
        console.log("Full sentence: " + this.fulltext);
        // End of constructors_______________________________________________________________________________________________________________________________
        askUser();
        function askUser() {
            inquirer.prompt([{
                name: "actionType",
                type: "list",
                message: "Would you like to create a flashcard or play a game?",
                choices: ["Create a Basic flashcard", "Create a Cloze flashcard", "Play the flashcard game", "I am done! Log out."],
                default: ["Play the flashcard game"]
            }]).then(function(action) {
                var actionType = action.actionType;
                switch (actionType) {
                    case "Create a Basic flashcard":
                        createBasic();
                        break;

                    case "Create a Cloze flashcard":
                        createCloze();
                        break;

                    case "Play the flashcard game":
                        play();
                        break;

                }
            })
        }

        function createBasic() {
            inquirer.prompt([{
                    type: "input",
                    message: "Enter a question: ",
                    name: "front"
                }, {
                    type: "input",
                    message: "What is the answer? ",
                    name: "back"
            }]).then(function(basic) {
                var BasicCard = new BasicCard(basic.front, basic.back);
                console.log("_________________________________________________");
                console.log("Here's your new Basic flashcard!");
                fs.appendFile("basicCards.json", JSON.stringify(BasicCard) + '\n', function(err) {
                    if (err) throw err;
                    askUser();
                });
            });
        }

    //     function createCloze() {
    //         inquirer.prompt([{
    //             name: "fulltext",
    //             type: "input",
    //             message: "Enter a true statement: "
    //         }, {
    //             name: "cloze",
    //             type: "input",
    //             message: "Cloze: "
    //         }]).then(function(cloze) {
    //             var ClozeCard = new ClozeCard(cloze.partial, cloze.cloze);
    //             console.log("_________________________________________________");
    //             console.log("Here's your new Cloze flashcard!");
    //             ClozeCard.printPartialCard();
    //             ClozeCard.printClozeCard();
    //             ClozeCard.printFullCard();
    //             fs.appendFile("clozeCards.json", JSON.stringify(ClozeCard) + '\n', function(err) {
    //                 if (err) throw err;
    //          });
    //      });
    // }({