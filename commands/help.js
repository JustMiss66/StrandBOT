const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.delete(1)

      if(args[0] == "1"){
        message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: ">avatar",
                        value: "Usage: >avatar | >avatar <@mention>",
                    },
                    {
                        name: ">dog",
                        value: "Will grab a cute dog image off the interwebs.",
                    },
                    {
                        name: ">info",
                        value: "Will display StrandBOT's information.",
                    },
                    {
                        name: ">insult",
                        value: "Usage: >insult <@mention>",
                    },
                    {
                        name: ">invite",
                        value: "Will send an invite link in the discord.",
                    },
                    {
                        name: ">level",
                        value: "Will display your current XP level.",
                    },
                    {
                        name: ">membercount",
                        value: "Will show how many users are in the discord.",
                    },
                    {
                        name: ">meme",
                        value: "Will grab a meme image off the interwebs.",
                    },
                    {
                        name: ">report",
                        value: "Usage: >report <@mention> <description>",
                    },
                    {
                        name: ">ping",
                        value: "Will show you StrandBOT's current ping.",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Help Page: 1",
                    }
              }});
            return;
        };

        if(args[0] == "2"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                        {
                              name: ">rurban",
                              value: "Will send a random urban dictionary meaning.",
                          },
                          {
                              name: ">urban",
                              value: "Usage: >urban <topic>",
                          },
                          {
                              name: ">serverinfo",
                              value: "Will display Strand's discord information.",
                          },
                          {
                              name: ">puma",
                              value: "Will display a cute image of a puma.",
                          },
                          {
                              name: ">suggest",
                              value: "Usage: >report <discord|youtube|twitter|server> <description>",
                          },
                          {
                              name: ">twitter",
                              value: "Will display send Strand's twitter in the channel",
                          },
                          {
                              name: ">youtube",
                              value: "Will display send Strand's youtube in the channel",
                          },
                          {
                              name: ">website",
                              value: "Will display send Strand's website in the channel",
                          },
                          {
                              name: ">userinfo",
                              value: "Usage: >userinfo | >userinfo <@mention>",
                          },
                          {
                              name: ">warnlevel",
                              value: "Will display your warnlevel",
                          },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Help Page: 2",
                    }
              }});
            return;
        };

        if(args[0] == "anime"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: ">slap",
                        value: "Usage: >slap <@mention>",
                    },
                    {
                        name: ">pat",
                        value: "Usage: >pat <@mention>",
                    },
                    {
                        name: ">hug",
                        value: "Usage: >hug <@mention>",
                    },
                    {
                        name: ">kiss",
                        value: "Usage: >kiss <@mention>",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Help Page: Anime Commands",
                    }
              }});
            return;
        };

        if(args[0] == "music"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                        {
                              name: ">Play",
                              value: "Usage: >Play (song url) \n**Aliases:** >p",
                        },
                        {
                              name: ">Stop",
                              value: "Only DJs can use this command!"
                        },
                        {
                              name: ">Pause",
                              value: "Only DJs can use this command!"
                        },
                        {
                              name: ">Resume",
                              value: "Only DJs can use this command!",
                        },
                        {
                              name: ">Volume",
                              value: "Usage: >Volume (number under 1) \n**Aliases:** >vol",
                        },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Help Page: Music Commands (WIP)",
                    }
              }});
            return;
        };

        if(args[0] == "game"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                        {
                              name: ">Coinflip",
                              value: "Flips a coin \n**Aliases:** >CF",
                        },
                        {
                              name: ">Roll",
                              value: "Rolls a 6 sided die"
                        },
                        {
                              name: ">LargeRoll",
                              value: "Rolls a 24 sided die"
                        },
                        {
                              name: ">8ball",
                              value: "Usage: >8ball (your question)?",
                        },
                        {
                              name: ">Fire",
                              value: "(BETA) Usage: >Fire (@Mention) \n**Aliases:** >Shoot",
                        },
                        {
                              name: ">rps",
                              value: "Usage: >rps (rock or paper or scissors)",
                        },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "StrandBOT | Help Page: Game Commands",
                    }
              }});
            return;
        };

        message.reply(" once a category has been picked StrandBOT will dm you");
        message.channel.send({embed: {
            color: 1339135,
            thumbnail: {
                url: (message.author.displayAvatarURL)
              },
            fields: [
              {
                  name: ">help 1",
                  value: "Will show the first 10 commands",
              },
              {
                  name: ">help 2",
                  value: "Will show the second 10 commands",
              },
              {
                  name: ">help anime",
                  value: "Will show the anime commands",
              },
              {
                  name: ">help music",
                  value: "Will show the music commands",
              },
              {
                  name: ">help games",
                  value: "Will show the game commands",
              },
        ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.displayAvatarURL ,
              text: "© StrandBot",
            },
            author: {
                icon_url: message.guild.iconURL,
                name: "StrandBOT | Help Categories",
              }
        }});
      return;
}

module.exports.conf = {
    aliases: ['h', 'halp']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "help"

}