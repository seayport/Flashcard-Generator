var FlashCard = require('./FlashCard');
var fs = require("fs");
var inquirer = require("inquirer");
var request = require("request");

// --------------------------------------------------------------------------------------
// Create a BasicCard constructor. It should accept front and back arguments.
// constructor parameters
//property = value
function BasicCard(front, back) {
    // if (!this instanceof BasicCard) {
    //     return new BasicCard(front, back);
    // }
    this.front = front;
    this.back = back;
};

BasicCard.prototype.printBasicCard = function() {
    console.log("Question: " + this.front + "\nAnswer: " + this.back);
};

// ClozeCard Constructor--------------------------------------------------------------
function ClozeCard(text, cloze) {
            if (!this instanceof ClozeCard) {
                 return new ClozeCard(text, cloze);
            }
            this.fulltext = text;
            this.cloze = cloze;
            this.partial = text.replace(cloze, "_____");      
        }

//ClozeCard prototypes----------------------------------------------------------------
        ClozeCard.prototype.printPartialCard = function() {
            console.log("Partial sentence: " + this.partial);
        }
        ClozeCard.prototype.printClozeCard = function() {
            console.log("Cloze: " + this.cloze);
        }
        ClozeCard.prototype.printFullCard = function() {
            console.log("Full sentence: " + this.fulltext);
        }
        // End of constructors_____________________________________________________
        askUser();
        function askUser() {
            inquirer.prompt([{
                name: "questionType",
                type: "rawlist",
                message: "Would you like to create a basic or cloze flashcard?",
                choices: ["Basic", "Cloze", "I am done! Log out."]
            }]).then(function(question) {
                var questionType = question.questionType;
                switch (questionType) {
                    case "Basic":
                        {
                            promptBasic();
                            break;
                        }
                    case "Cloze":
                        {   promptCloze();
                            break;
                        }
                    }
            })
        };

        function promptBasic() {
            inquirer.prompt([{
                name: "front",
                type: "input",
                message: "Enter a question: "   
            }, {
                name: "back",
                type: "input",
                message: "What is the answer? "
            }]).then(function(basic) {
                var basicFlashCard = new BasicCard(basic.front, basic.back);
                console.log("_________________________________________________");
                console.log("Here's your new Basic flashcard!");
                basicFlashCard.printBasicCard();
                fs.appendFile("basicCards.json", JSON.stringify(basicFlashCard) + '\n', function(err) {
                   if (err) throw err;
                   askUser();
                });
            });
        }

        function promptCloze() {
            inquirer.prompt([{
                name: "text",
                type: "input",
                message: "Enter a statement: "
            }, {
                name: "cloze",
                type: "input",
                message: "Enter cloze: "
            }]).then(function(cloze) {
                var ClozeFlashCard = new ClozeCard(cloze.text, cloze.cloze);
                console.log("_________________________________________________");
                console.log("Here's your new Cloze flashcard!");
                ClozeFlashCard.printPartialCard();
                ClozeFlashCard.printClozeCard();
                ClozeFlashCard.printFullCard();
                fs.appendFile("clozeCards.json", JSON.stringify(ClozeFlashCard) + '\n', function(err) {
                    if (err) throw err;
                    askUser();
                });
            });
        }

        