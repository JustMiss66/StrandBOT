const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    var suggestion = message.content.split(' ').slice(2).join(" ")
    var type = args[1]
	
	    if(args[0] == "help"){
            message.reply("Usage: >suggest <discord|youtube|twitter|server> <description>");
            return;
        };
	
    if(!type) {
       return message.channel.send("Please provide what category your suggestion fits! e.g. `Discord, Staff, Server, Youtube and Twitter`");
    }
    if(!suggestion) {
       return message.channel.send("Please put a suggestion before sending");
    }
    const memberssg = message.author
    const memberzsszzsssz = message.mentions.members.first();
    if(!memberssg) {``
         return message.channel.send("That user does not seem valid");
   }
    message.reply(` your suggestion was successfully submitted. `);
    message.delete()
    var suggestionembed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setAuthor(`Public Discord Suggestions`, message.guild.iconURL)
    .addField(" **User:**", `${message.author.username}`)
    .addField(" **Category:** ", `${type}`)
    .addField(" **Suggestion:** ", `${suggestion}`)
    .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
    message.guild.channels.find("name", "discord-suggestions").send({ embed: suggestionembed })
}

module.exports.conf = {
    aliases: ['sug']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "suggest"

}