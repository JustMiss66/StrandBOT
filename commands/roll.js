const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.reply(" you rolled a " + ( Math.floor(Math.random() * 6) + 1 ) );
}

module.exports.conf = {
    aliases: ['r']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "roll"

}