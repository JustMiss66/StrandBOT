const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    if(!message.member.permissions.has('BAN_MEMBERS')) {
        return message.channel.send('You are not an ``Administrator``.');
            }
        message.delete()
        var args = message.content.split(' ').slice(1);
        var argresult = args.join(" ");
        message.channel.send(argresult);
}

module.exports.conf = {
    aliases: ['ac', 'announce', 'tell']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "say"

}