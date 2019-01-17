const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.channel.send('Pinging...').then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp;
            m.edit(`Pong! \`${ping} ms\``)
            })
}

module.exports.conf = {
    aliases: []
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "ping"

}