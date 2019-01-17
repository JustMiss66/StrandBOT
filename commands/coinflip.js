const Discord = require("discord.js");

var coin = [
    ":moneybag: **CoinFlip:** you flipped heads :moneybag:",
    ":moneybag: **CoinFlip:** you flipped tails :moneybag:",
];
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.channel.send((coin[Math.floor(Math.random() * coin.length)]) + ".");
}

module.exports.conf = {
    aliases: ['cf']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "coinflip"

}