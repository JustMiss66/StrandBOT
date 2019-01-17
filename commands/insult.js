const Discord = require("discord.js");

var insults = [
    "I'm the worst bot to ever exist. Shoot me",
    "LOL, my code is so inefficient.",
    "Defintely leave the discord because I'm a shit bot and I'll spam you.",
    "Make sure to prepare mentally for my autistic javascript coded responses.",
    "StrandBOT is the shittest fucking name of the planet lol",
];
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
message.channel.send("**StrandBOT's Self Insult**\n" + insults[Math.floor(Math.random() * insults.length)]);
}

module.exports.conf = {
    aliases: ['jokes']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "insult"

}