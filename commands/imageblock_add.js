const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    let staff = message.member.roles.find("name", "Helper ✊") || message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
    if(!message.member.roles.has(staff.id)) {
        return message.channel.send('You are not a staff member.');
        }

        if(args[0] == "help"){
            message.reply("Usage: >iblock <user>");
            return;
        };

        if(message.mentions.users.size === 0) {
               return message.channel.send("Please mention a user to image block");
        }
        const memberzsszzs = message.mentions.members.first();
        let imuteMember = message.guild.member(message.mentions.users.first());
        if(!imuteMember) {
             return message.channel.send("That user does not seem valid");
        }
        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have permission to perform this command");
        }
        imuteMember.addRole(imuteMember.guild.roles.find("name", "iBlocked")).then(member => {
        message.delete()
        message.channel.send(`${member.user.username} was successfully image blocked. `)});
        console.log("[StrandBot Log] " + memberzsszzs.user.username + ' was image blocked on Strands Public Discord')
        var iblockembed = new Discord.RichEmbed()
        .setColor("#a100ff")
        .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
        .addField(" **User:**", `${memberzsszzs.user.tag}`)
        .addField(" **Action:** ", "Image blocked")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        memberzsszzs.guild.channels.find("name", "modlogs").send({ embed: iblockembed })
}

module.exports.conf = {
    aliases: ['imageblock']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "iblock"

}