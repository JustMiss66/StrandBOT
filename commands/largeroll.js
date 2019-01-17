const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.reply("You rolled a " + ( Math.floor(Math.random() * 24) + 1 ) );
}

module.exports.conf = {
    aliases: ['lroll']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "largeroll"

}