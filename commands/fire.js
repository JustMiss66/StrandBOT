const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Usage: >fire <user>");
        return;
    };

    if(message.mentions.users.size === 0) {
        return message.channel.send("Please mention a user to fire shots at!");
    }
    if(message.mentions.users === message.author) {
        return message.channel.send("You can't fire shots at yourself numskull");
    }
    message.delete()
    message.channel.send(":fire: " + message.author + " has fired a shot at " + (message.mentions.users.first()) + ". Lets watch this intense battle play out! :fire:" );
    message.channel.send(":fire: " + (message.mentions.users.first()) + ", What do you have to say to them? :fire:" );
}

module.exports.conf = {
    aliases: ['shoot']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "fire"

}