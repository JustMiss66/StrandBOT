const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.reply(" this is Strand's Website: \nhttp://strand.ga/");
}

module.exports.conf = {
    aliases: ['web', 'site']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "website"

}