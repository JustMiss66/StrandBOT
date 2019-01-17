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
            message.reply("Usage: >removensfw <user>");
            return;
        };

        if(message.mentions.users.size === 0) {
               return message.channel.send("Please mention a user to remove from the nsfw channel");
        }
        const memberzsszz = message.mentions.members.first();
        let unnsfwMember = message.guild.member(message.mentions.users.first());
        if(!unnsfwMember) {``
             return message.channel.send("That user does not seem valid");
        }
        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have permission to perform this command");
        }
        unnsfwMember.removeRole(unnsfwMember.guild.roles.find("name", "NSFW")).then(member => {
        message.delete()
        message.channel.send(`${member.user.username} was successfully removed from the nsfw chat! `)});
        console.log("[StrandBot Log] " + memberzsszz.user.username + ' was removed from the nsfw text channel on Strands Public Discord')
        var rnsfwembed = new Discord.RichEmbed()
        .setColor("#0090ff")
        .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
        .addField(" **User:**", `${memberzsszz.user.tag}`)
        .addField(" **Action:** ", "NSFW Chat Remove")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        memberzsszz.guild.channels.find("name", "modlogs").send({ embed: rnsfwembed })
}

module.exports.conf = {
    aliases: ['rnsfw']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "removensfw"

}