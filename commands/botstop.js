const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    if(message.author.id !== message.guild.ownerID) {
        return message.channel.send('You are not an ``Owner``.');
        }
        message.delete()
        message.channel.send("**[Strandbot]** commencing shutdown proccess.").then(() => process.exit());
}

module.exports.conf = {
    aliases: ['clientstop']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "botstop"

}


