const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    let staff = message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
    if(!message.member.roles.has(staff.id)) {
        return message.channel.send('You are not an ``Administrator``.');
            }
            if(args[0] == "help"){
                message.reply("Usage: >ban <user> <reason>");
                return;
            };

            if(message.mentions.users.size === 0) {
                return message.channel.send("Please mention a user to ban");
         }

         var banreason = message.content.split(' ').slice(2).join(" ")
         if (!banreason) banreason = "No Reason";
         const members = message.mentions.members.first();
         let banMember = message.guild.member(message.mentions.users.first());
         if(!banMember) {
              return message.channel.send("That user does not seem valid");
         }
         if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
             return message.channel.send("I don't have permission to perform this command");
         }
         message.delete()
         banMember.ban(1)
             message.channel.send(members.user.username + " was Banned from Strand's public discord!")
             console.log("[StrandBot Log] " + members.user.username + ' was banned from Strands Public Discord')
             var banembed = new Discord.RichEmbed()
             .setColor("RED")
             .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
             .addField(" **User:**", `${members.user.tag}`)
             .addField(" **Action:** ", "Ban")
             .addField(" **Action By:** ", `${message.author.username}`)
             .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
             .addField(" **Reason:** ", `${banreason}`)
             .addField("**Case ID:**", `#${random(1000, 10000)}`)
             members.guild.channels.find("name", "modlogs").send({ embed: banembed })

}

module.exports.conf = {
    aliases: ['banish']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "ban"

}