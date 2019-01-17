const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    let argsz = message.content.split(" ").slice(1);
    let messagecount = argsz[0];
    let staff = message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
    if(!message.member.roles.has(staff.id)) {
      message.channel.send("You do not have permission to purge messages in this server.");
      console.log("[PURGE]: " + message.author.username + " unsuccessfully attempted to purge in the " + message.channel.guild.name + " server.");

      if(args[0] == "help"){
        message.reply("Usage: >purge <amount>");
        return;
    };
    } 
    else {
      message.channel.fetchMessages({
        limit: messagecount
      }).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      console.log("[Strandbot Logs] " + message.author.username + " purged " + messagecount + " messages in " + message.channel.name + " in the " + message.guild.name + " server.");
      message.channel.send( (message.author) + " has cleaned `" + (messagecount) + "`.")

      var purgeembed = new Discord.RichEmbed()
      .setColor("#005ca3")
      .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
      .addField(" **Action:** ", "Purge")
      .addField(" **Amount:**", `${messagecount} messages deleted in <#${message.channel.id}>`)
      .addField(" **Action By:** ", `${message.author.username}`)
      .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
      .addField("**Case ID:**", `#${random(1000, 10000)}`)
      message.guild.channels.find("name", "modlogs").send({ embed: purgeembed })

    }
}

module.exports.conf = {
    aliases: ['clean', 'clense']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "purge"

}