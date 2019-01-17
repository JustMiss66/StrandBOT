const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.delete(1)
      message.channel.send({embed: {
          color: 1339135,
          thumbnail: {
              url: (bot.user.displayAvatarURL)
            }
          fields: [{
                  name: "Guild Name:",
                  value: (message.guild.name),
                  inline: true,
            },
            {
                  name: "Guild Owner:",
                  value: (message.guild.owner),
                  inline: true,
            },
            {
                  name: "Member Count:",
                  value: (message.guild.memberCount),
                  inline: true,
            },
            {
              name: "Role Count:",
              value: (message.guild.roles.size),
              inline: true,
            },
      ],
          timestamp: new Date(),
          footer: {
            icon_url: bot.user.displayAvatarURL ,
            text: "© StrandBot",
          },
          author: {
              icon_url: message.guild.iconURL,
              name: "Strand's Public Discord",
            }
      }});
}

module.exports.conf = {
    aliases: ['si', 'guildinfo', 'gi']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "serverinfo"

}