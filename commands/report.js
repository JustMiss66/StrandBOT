const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    var suggestion = message.content.split(' ').slice(2).join(" ")
    var user = args[1]
	
	    if(args[0] == "help"){
            message.reply("Usage: >report <@mention> <why you're reporting them>");
            return;
        };
	
    if(!user) {
       return message.channel.send("Please provide what category your suggestion fits! e.g. `Discord, Staff, Server, Youtube and Twitter`");
    }
    if(!suggestion) {
       return message.channel.send("Please put a suggestion before sending");
    }
    const members = message.author
    const memberz = message.mentions.members.first();
    if(!members) {``
         return message.channel.send("That user does not seem valid");
   }
    message.reply(` your report was successfully submitted. `);
    message.delete()
    var reportembed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`Public Discord Reports`, message.guild.iconURL)
    .addField(" **Report from:**", `${message.author}`)
    .addField(" **Reported user:** ", `${memberz}`)
    .addField(" **Reason:** ", `${suggestion}`)
    .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
    message.guild.channels.find("name", "reports").send({ embed: reportembed })
}

module.exports.conf = {
    aliases: []
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "report"

}