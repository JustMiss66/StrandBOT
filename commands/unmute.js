const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    let staff = message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊");
    if(!message.member.roles.has(staff))  {
        return message.channel.send('You are not a staff member.');
        }
		
	if(args[0] == "help"){
        message.reply("Usage: >unmute <@mention> <reason>");
        return;
    };
		
            if(message.mentions.users.size === 0) {
                   return message.channel.send("Please mention a user to unmute");
            }
            var unmutereason = message.content.split(' ').slice(2).join(" ")
            if (!unmutereason) unmutereason = "No Reason";
            const memberzs = message.mentions.members.first();
            let unmuteMember = message.guild.member(message.mentions.users.first());
            if(!unmuteMember) {``
                 return message.channel.send("That user does not seem valid");
            }
            if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
                return message.channel.send("I don't have permission to perform this command");
            }
            unmuteMember.removeRole(unmuteMember.guild.roles.find("name", "Muted")).then(member => {
            message.delete()
            message.channel.send(`${memberzs.user.username} was successfully unmuted. `)});
            console.log("[StrandBot Log] " + memberzs.user.username + ' was unmuted in Strands Public Discord')
            var unmuteembed = new Discord.RichEmbed()
            .setColor("#ff7530")
            .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
            .addField(" **User:**", `${memberzs.user.tag}`)
            .addField(" **Action:** ", "unMute")
            .addField(" **Action By:** ", `${message.author.username}`)
            .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
            .addField(" **Reason:** ", `${unmutereason}`)
            .addField("**Case ID:**", `#${random(1000, 10000)}`)
            memberzs.guild.channels.find("name", "modlogs").send({ embed: unmuteembed })
}

module.exports.conf = {
    aliases: ['um', 'removemute']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "unmute"

}