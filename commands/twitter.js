const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.reply(" this is Strand's Twitter Account: \nhttps://www.twitter.com/Strandable");

}

module.exports.conf = {
    aliases: ['tweet']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "twitter"

}