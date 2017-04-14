var inquirer = require('inquirer')
// core node package for reading and writing files
var fs = require('fs');

askUser();
function askUser() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to create a flashcard or play a game?",
            choices: [
                "Create a flashcard", "Play the flashcard game"
            ],
            name: "action"
        }
    ]).then(function (user) {
        action = user.action;

        callSwitch();
        // console.log(JSON.stringify(user, null, 2));

    });
}


function callSwitch() {
    switch (action) {
        case "Create a flashcard":
            create();
            break;

        case "Play the flashcard game":
            play();
            break;

    }

}

function createCard() {

    inquirer.prompt([

        {
            type: "input",
            message: "Which flashcard would you like to create?",
            name: "item"
        },
        // {
        //     type: "input",
        //     message: "What category of item is this? ",
        //     name: "category"
        // },
        {
            type: "input",
            message: "What would you like to start the bidding at? ",
            name: "startingBid"
        }


    ]).then(function (user) {
        item = user.item;
        // category = user.category;
        startingBid = user.startingBid;

        // log();
    //add to SQL();

    });
}

function bid() {
console.log("all items")
    inquirer.prompt([


        {
            type: "input",
            message: "Which item would you like to bid on",
            name: "item"
        },

        {
            type: "input",
            message: "How much would you like to bid? ",
            name: "bid"
        }


    ]).then(function (user) {
        item = user.item;
        category = user.category;
        startingBid = user.startingBid;

        // log();
        //add to SQL();

    });













// Create a BasicCard constructor. It should accept front and back arguments.
// constructor(parameters)
function BasicCard (front,back){
	//property = value
	this.front = front;
	this.back = back;
}

// Use prototypes to attach these methods, wherever possible.
var firstCard = new BasicCard('Who was the first president of the United States?', 'George Washington');
var secondCard = new BasicCard('Who was the second president of the United States', 'John Adams');

console.log(firstCard.front);
console.log(firstCard.back);

console.log(secondCard.front);
console.log(secondCard.back);

// Create a ClozeCard constructor. It should accept text and cloze arguments.
function ClozeCard (text, cloze){

	if(this instanceof ClozeCard)
		this.text = fullText;
		this.cloze = cloze;	
	}
	else{
      return 'Sorry this does not exist!';
    }
  }	

//_________________________________________________________________________________________________________________________
askUser();

function askUser() {


    inquirer.prompt([

        {
            type: "list",
            message: "Would you like to play a game or make a new card?",
            choices: [
                "POST AN ITEM", "BID ON AN ITEM"
            ],
            name: "action"
        }
    ]).then(function (user) {
        action = user.action;

        callSwitch();
        // console.log(JSON.stringify(user, null, 2));

    });
}


function callSwitch() {
    switch (action) {
        case "POST AN ITEM":
            post();
            break;

        case "BID ON AN ITEM":
            bid();
            break;

    }

}

function post() {

    inquirer.prompt([

        {
            type: "input",
            message: "What item would you like to post?",
            name: "item"
        },
        // {
        //     type: "input",
        //     message: "What category of item is this? ",
        //     name: "category"
        // },
        {
            type: "input",
            message: "What would you like to start the bidding at? ",
            name: "startingBid"
        }


    ]).then(function (user) {
        item = user.item;
        // category = user.category;
        startingBid = user.startingBid;

        // log();
    //add to SQL();

    });
}

function bid() {
console.log("all items")
    inquirer.prompt([


        {
            type: "input",
            message: "Which item would you like to bid on",
            name: "item"
        },

        {
            type: "input",
            message: "How much would you like to bid? ",
            name: "bid"
        }


    ]).then(function (user) {
        item = user.item;
        category = user.category;
        startingBid = user.startingBid;

        // log();
        //add to SQL();

    });

// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.

ClozeCard.prototype.partial = function(){
      
      if(this.text.includes(this.cloze)){
       return this.text.replace(this.cloze, '...');
    }
    else{
      return 'Sorry this does not exist!';
    }
  }

var firstCloze = new ClozeCard('George Washington was the first president of the United States', 'George Washington');
var secondCloze = new ClozeCard('John Adams was the first president of the United States', 'John Adams');


console.log(firstCloze.cloze);
console.log(firstCloze.text);
console.log(firstCloze.partial());

console.log(secondCloze.cloze);
console.log(secondCloze.text);
console.log(secondCloze.partial());





// // Inheritance
// function Child(){
//   ClozeCard.call(this, 'Welcome to America', 'Welcome');
// }
// Child.prototype = Object.create(ClozeCard.prototype);
// var childCloze = new Child();
// //console.log(firstCloze.partial === childCloze.partial); // end of inheritance
// //console.log(childCloze.partial());



//  ClozeCard.prototype.partial = function(){
//     if(this.text.includes(this.cloze)){
//        return this.text.replace(this.cloze, '...');
//     }
//     else{
//       return "Sorry this does not exits!";
//     }
//   }

// Esterling's notes

// var data = [
//   {
//      front: secondCard.front,
//      back:  secondCard.back
//   },
//   {
//     front: firstCard.front,
//     back: firstCard.back
//   }
// ];

// console.log(data);


















































