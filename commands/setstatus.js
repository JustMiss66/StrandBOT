const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    if(!message.member.permissions.has('BAN_MEMBERS')) {
        return message.channel.send('You are not an Administrator`.');
            }
        if(!args[1]){message.channel.send("Usage: +setstatus (Status)"); }
        message.delete()
        bot.user.setStatus(args[1]);
        message.channel.send("My status has been successfully altered to `" + args[1] + "`.");
}

module.exports.conf = {
    aliases: []
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "setstatus"

}