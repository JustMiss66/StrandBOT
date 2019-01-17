const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    let staff = message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
    if(!message.member.roles.has(staff.id)) {
        return message.channel.send('You are not a staff member.');
        }

        if(args[0] == "help"){
            message.reply("Usage: >kick <user> <reason>");
            return;
        };

        if(message.mentions.users.size === 0) {
            return message.channel.send("Please mention a user to kick");
        }
        var kickreason = message.content.split(' ').slice(2).join(" ")
        if (!kickreason) kickreason = "No Reason";
        const member = message.mentions.members.first();
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.channel.send("That user does not seem valid");
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
             return message.channel.send("I don't have permission to perform this command");
            }
        message.delete()
        kickMember.kick()
        message.channel.send(member.user.username + " was removed from Strand's public discord!")
        console.log("[StrandBot Log] " + member.user.username + ' was kicked from Strands Public Discord')
        var kickembed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
        .addField(" **User:**", `${member.user.tag}`)
        .addField(" **Action:** ", "Kick")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField(" **Reason:** ", `${kickreason}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        member.guild.channels.find("name", "modlogs").send({ embed: kickembed })
}

module.exports.conf = {
    aliases: ['k', 'remove']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "kick"

}