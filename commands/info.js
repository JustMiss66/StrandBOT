const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.delete(1);
    message.channel.send({embed: {
        color: 1339135,
        thumbnail: {
            url: (bot.user.displayAvatarURL)
          },
        fields: [{
                name: "Bot Name:",
                value: (bot.user.username),
                inline: true,
          },
          {
                name: "Discriminator",
                value: (`#${bot.user.discriminator}`),
                inline: true,
          },
          {
                name: "Author:",
                value: ("Connor | Strand"),
                inline: true,
          },
          {
                name: "Version:",
                value: ("0.9.0"),
                inline: true,
          },
          {
                name: "Status:",
                value: (bot.user.presence.status),
                inline: true,
          },
          {
                name: "Coding Language:",
                value: ("Javascript"),
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
    aliases: ['i', 'information', 'botinfo']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "info"

}