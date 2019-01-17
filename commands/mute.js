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
            message.reply("Usage: >mute <user> <reason>");
            return;
        };

        if(message.mentions.users.size === 0) {
               return message.channel.send("Please mention a user to mute");
        }
        var mutereason = message.content.split(' ').slice(2).join(" ")
        if (!mutereason) mutereason = "No Reason";
        const memberss = message.mentions.members.first();
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {``
             return message.channel.send("That user does not seem valid");
        }
        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have permission to perform this command");
        }
        muteMember.addRole(muteMember.guild.roles.find("name", "Muted")).then(member => {
        message.delete()
        message.channel.send(`${memberss.user.username} was successfully muted. `)});
        console.log(memberss.user.username + ' was Muted in Strands Public Discord')
        var muteembed = new Discord.RichEmbed()
        .setColor("#d64700")
        .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
        .addField(" **User:**", `${memberss.user.tag}`)
        .addField(" **Action:** ", "Mute")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField(" **Reason:** ", `${mutereason}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        memberss.guild.channels.find("name", "modlogs").send({ embed: muteembed })
}

module.exports.conf = {
    aliases: ['m', 'mutes']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "mute"

}