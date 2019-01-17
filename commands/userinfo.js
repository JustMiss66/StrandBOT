const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.delete(1)

    let target = message.mentions.users.first() || message.author || message.member
    message.channel.send({embed: {
        color: 1339135,
        thumbnail: {
            url: (target.displayAvatarURL)
          },
        fields: [{
                name: "Username:",
                value: (target.username),
                inline: true,
          },
          {
                name: "Discriminator",
                value: (`#${target.discriminator}`),
                inline: true,
          },
          {
                name: "ID:",
                value: (message.author.id),
                inline: true,
          },
          {
                name: "Guild Display Name:",
                value: ("Work in Progress"),
                inline: true,
          },
          {
                name: "Status:",
                value: (target.presence.status),
                inline: true,
          },
          {
                name: "Created At",
                value: (target.createdAt),
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
    aliases: ['ui']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "userinfo"

}