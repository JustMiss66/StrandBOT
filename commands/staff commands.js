const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.delete(1)
      message.reply("please check your dms for the commands!");
        if(args[0] == "1"){
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: ">ban",
                        value: "Usage: >ban <@mention> <reason>",
                    },
                    {
                        name: ">tempban",
                        value: "(WIP)Usage: >tempban <@mention> <s|m|h|d> <reason>",
                    },
                    {
                        name: ">softban",
                        value: "(WIP)Usage: >softban <@mention> <reason>",
                    },
                    {
                        name: ">hackban",
                        value: "Usage: >ban <user.ID> <reason>",
                    },
                    {
                        name: ">unban",
                        value: "Usage: >unban <user.ID> <reason>",
                    },
                    {
                        name: ">mute",
                        value: "Usage: mute <@mention> <reason>",
                    },
                    {
                        name: ">tempmute",
                        value: ">tempmute <@mention> <s|m|h|d> <reason>",
                    },
                    {
                        name: ">unmute",
                        value: "Usage: >unmute <@mention> <reason>",
                    },
                    {
                        name: ">kick",
                        value: "Usage: >kick <@mention> <reason>",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Staff Commands Page: 1",
                    }
              }});
            return;
        };

        if(args[0] == "2"){
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: ">finduser",
                        value: "Usage: >finduser <keyword>",
                    },
                    {
                        name: ">botstop",
                        value: "Usage: >botstop (ADMIN)",
                    },
                    {
                        name: ">addnsfw",
                        value: "Usage: >addnsfw <@mention> <reason>",
                    },
                    {
                        name: ">removensfw",
                        value: "Usage: >removensfw <@mention> <reason>",
                    },
                    {
                        name: ">imageblock",
                        value: "Usage: >imageblock <@mention> <reason>",
                    },
                    {
                        name: ">unimageblock",
                        value: "Usage: >unimageblock <@mention> <reason>",
                    },
                    {
                        name: ">purge",
                        value: "Usage: >purge <amount>",
                    },
                    {
                        name: ">say",
                        value: "Usage: >say <sentence> (ADMIN)",
                    },
                    {
                        name: ">warn",
                        value: "Usage: >warn <@mention> (WIP)",
                    },
                    {
                        name: ">warnlevel",
                        value: "Usage: >warnlevel <@mention> (WIP)",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Staff Commands Page: 2",
                    }
              }});
            return;
        };

        message.author.send({embed: {
            color: 1339135,
            thumbnail: {
                url: (message.author.displayAvatarURL)
              },
            fields: [
              {
                  name: ">staffhelp 1",
                  value: "Will show the first 10 commands",
              },
              {
                  name: ">staffhelp 2",
                  value: "Will show the next 10 commands",
              },
        ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.displayAvatarURL ,
              text: "© StrandBot",
            },
            author: {
                icon_url: message.guild.iconURL,
                name: "StrandBOT | Staff Commands",
              }
        }});
      return;
}

module.exports.conf = {
    aliases: ['scommands', 'sc', 'staffhelp']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "staffcommands"

}