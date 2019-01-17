const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.delete();
    message.channel.send("https://discord.gg/yfKEYS8");
}

module.exports.conf = {
    aliases: ['inv']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "invite"

}