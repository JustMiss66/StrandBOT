const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const ms = require("ms");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    let staff = message.member.roles.find("name", "Helper ✊") || message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
    if(!message.member.roles.has(staff.id)) {
        return message.channel.send('You are not a staff member.');
        }

        if(args[0] == "help"){
            message.reply("Usage: >tempmute <user> <1s/m/h/d> <reason>");
            return;
        };

        if(message.mentions.users.size === 0) {
            return message.channel.send("Please mention a user to tempmute");
         }
         var tempmutereason = message.content.split(' ').slice(3).join(" ")
         if (!tempmutereason) tempmutereason = "No Reason";
        let tempmuteMember = message.guild.member(message.mentions.users.first());
        let tmuteRole = message.guild.roles.find("name", "Muted");
        if(!tmuteRole) return message.reply("I couldn't find the role Muted, please check your roles")
        let params = message.content.split(" ").slice(1);
        let time = params[1];
        if(!time) return message.reply("there is no time specified. Please specify an amount of time to mute for!")
        
        tempmuteMember.addRole(tempmuteMember.guild.roles.find("name", "Muted"));
        message.channel.send(message.mentions.users.first() + `, you've been muted for ${ms(ms(time), {long: true})}`);
        var tempmuteembed = new Discord.RichEmbed()
        .setColor("#ff4444")
        .setAuthor(`Public Discord Modlogs`, message.guild.icon)
        .addField(" **User:**", `${tempmuteMember.user.tag}`)
        .addField(" **Action:** ", "TempMute")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Length:**", `${ms(ms(time), {long: true})}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField(" **Reason:** ", `${tempmutereason}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        memberzsszs.guild.channels.find("name", "modlogs").send({ embed: tempmuteembed })
        
        setTimeout(function() {
            tempmuteMember.removeRole(tempmuteMember.guild.roles.find("name", "Muted"));
            message.delete();
            message.channel.send(message.mentions.users.first() + `, you have been unmuted. Your mute lasted: ${ms(ms(time), {long: true})}`);
         }, ms(time));
         console.log("[StrandBot Log] " + member.user.username + ` was muted for ${ms(ms(time), {long: true})}`)
}

module.exports.conf = {
    aliases: ['tm', 'tmute']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "tempmute"

}