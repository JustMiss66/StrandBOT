const Discord = require("discord.js");

var pick = [
    "scissors",
    "rock",
    "paper",
];
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    if(args[0] == "help"){
        message.reply("Usage: >rps <rock|paper|scissors>");
        return;
    };

    var choice = args[0];
    if (choice == "paper" || choice == "p") {
      var numb = Math.floor(Math.random() * 100);
      if (numb <= 50) {
        var choice2 = "paper";
      } else if (numb > 50) {
        var choice2 = "rock";
      } else {
        var choice2 = "scissors";
      }
      if (choice2 == "scissors") {
        var response = "I'm choosing **Scissors**! :v: I win!"
      } else if (choice2 == "paper") {
        var response = "I'm choosing **Paper**! :hand_splayed: It's a tie!"
      } else {
        var response = "I'm choosing **Rock**! :punch: You win!"
      }
      message.channel.send(response);
    } else if (choice == "rock" || choice == "r") {
      var numb = Math.floor(Math.random() * 100);
      if (numb <= 50) {
        var choice2 = "paper";
      } else if (numb > 50) {
        var choice2 = "rock";
      } else {
        var choice2 = "scissors";
      }
      if (choice2 == "paper") {
        var response = "I'm choosing **Paper**! :hand_splayed: I win!"
      } else if (choice2 == "rock") {
        var response = "I'm choosing **Rock**! :punch: It's a tie!"
      } else {
        var response = "I'm choosing **Scissors**! :v: You win!"
      }
      message.channel.send(response);
    } else if (choice == "scissors" || choice == "s") {
      var numb = Math.floor(Math.random() * 100);
      if (numb <= 50) {
        var choice2 = "paper";
      } else if (numb > 50) {
        var choice2 = "rock";
      } else {
        var choice2 = "scissors";
      }
      if (choice2 == "rock") {
        var response = "I'm choosing **Paper**! :hand_splayed: You win!"
      } else if (choice2 == "scissors") {
        var response = "I'm choosing **Scissors**! :v: It's a tie!"
      } else {
        var response = "I'm choosing **Rock**! :punch: I win!"
      }
      message.channel.send(response);
    } else {
      message.channel.send(`You need to use \`+rps\` <rock|paper|scissors>`);
    }
  }
  
    






    // if(!args[1]) {
    //     return  message.channel.send(message.author + " please pick either rock, paper or scissors to play!");
    //     }
    //     message.channel.send(message.author + " you picked: `" + args[1] + "` and StrandBOT picked: `" + (pick[Math.floor(Math.random() * pick.length)]) + "`.")

	
module.exports.conf = {
    aliases: ['rockpaperscissor']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "rps"

}