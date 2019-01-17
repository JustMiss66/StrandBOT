const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;
    
    if(args[0] == "help"){
        message.reply("Usage: >donate <amount>");
        return;
    };

    if (message.author.id === message.guild.ownerID);
    message.channel.send("Strand, you can't donate to yourself!");
    return;

    if(args[0] == "help"){
        message.reply("Usage: +donate <amount>");
        return;
    };

if (!args[1]){message.channel.send("Please mention an amount you would like to donate!");
    return; }
message.channel.send("Here is the donation link to the amount you wish to donate:\nhttps://paypal.me/Strandxo/"+args[1]);
}

module.exports.conf = {
    aliases: ['givestrand']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "donate"

}