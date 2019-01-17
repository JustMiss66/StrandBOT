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
            message.reply("Usage: >uniblock <user>");
            return;
        };

        if(message.mentions.users.size === 0) {
               return message.channel.send("Please mention a user to remove the image block role from!");
        }
        const memberzsszzsz = message.mentions.members.first();
        let iunmuteMember = message.guild.member(message.mentions.users.first());
        if(!iunmuteMember) {
             return message.channel.send("That user does not seem valid");
        }
        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have permission to perform this command");
        }
        iunmuteMember.removeRole(iunmuteMember.guild.roles.find("name", "iBlocked")).then(member => {
        message.delete()
        message.channel.send(`${member.user.username} was successfully un-image blocked. `)});
        console.log("[StrandBot Log] " + memberzsszzsz.user.username + ' was un-image blocked on Strands Public Discord')
        var uniblockembed = new Discord.RichEmbed()
        .setColor("#d182ff")
        .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
        .addField(" **User:**", `${memberzsszzsz.user.tag}`)
        .addField(" **Action:** ", "Image Allowed")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        memberzsszzsz.guild.channels.find("name", "modlogs").send({ embed: uniblockembed })
}

module.exports.conf = {
    aliases: ['removeiblock', 'unimageblock']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "uniblock"

}