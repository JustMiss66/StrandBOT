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
        return message.channel.send('You are not a staff member.');
        }

        if(args[0] == "help"){
            message.reply("Usage: >hackban <userID> <reason>");
            return;
        };

        if(!args[1]) {
               return message.channel.send("Please provide a user ID to ban");
        }
        var banreason = message.content.split(' ').slice(2).join(" ")
        if (!banreason) banreason = "No Reason";
        const hmembers = args.join(' ');
        let bannMember = args[1];
        if(!bannMember) {
             return message.channel.send("That user does not seem valid");
        }
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("I don't have permission to perform this command");
        }
        message.delete()
        message.guild.ban(bannMember)
            message.channel.send(args[1] + " was Banned from Strand's public discord!")
            console.log("[StrandBot Log] " + args[1] + ' was banned from Strands Public Discord')
            var hbanembed = new Discord.RichEmbed()
            .setColor("RED")
            .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
            .addField(" **User:**", `${args[1]}`)
            .addField(" **Action:** ", "HackBan")
            .addField(" **Action By:** ", `${message.author.username}`)
            .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
            .addField(" **Reason:** ", `${banreason}`)
            .addField("**Case ID:**", `#${random(1000, 10000)}`)
            message.guild.channels.find("name", "modlogs").send({ embed: hbanembed })
}

module.exports.conf = {
    aliases: ['hban']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "hackban"

}