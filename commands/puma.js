const Discord = require("discord.js");

var cat = [
    "http://i.imgur.com/T8BJ4FI.jpg",
    "http://i.imgur.com/2j8QyTr.jpg",
    "http://i.imgur.com/MbDSsVn.jpg",
    "http://i.imgur.com/jWDMDVT.jpg",
    "http://i.imgur.com/Yc4Hcx1.jpg",
    "http://i.imgur.com/e1BZ52p.jpg",
    "http://i.imgur.com/3HQTZAJ.jpg",
    "http://i.imgur.com/oRIABMn.jpg",
    "http://i.imgur.com/VVA3gW1.jpg",
    "http://i.imgur.com/mHUR7xG.jpg",
    "http://i.imgur.com/XqJKtzr.jpg",
    "http://i.imgur.com/JrXffXz.jpg",
    "http://i.imgur.com/00h3aeh.jpg",
    "http://i.imgur.com/qDWlPzI.jpg",
    "http://i.imgur.com/v4CYxlW.jpg",
    "http://i.imgur.com/1MLrQ6w.jpg",
    "http://i.imgur.com/CunFJsS.jpg",
    "http://i.imgur.com/oz7kExB.jpg",
    "http://i.imgur.com/bcEsELt.jpg",
    "http://i.imgur.com/NhIWBT3.jpg",
];
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
    message.channel.send({embed: {
        color: 3447003,
        image: {
            url: (cat[Math.floor(Math.random() * cat.length)])
          },
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
    aliases: ['tiger', 'lion', 'cat']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "puma"

}