const Discord = require("discord.js");
const PREFIX = ">"
const superagent = require('superagent');

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;

    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`);
   // console.log(body.message)
    if(!{body}) return message.channel.send("I broke! Try again.")

    message.channel.send({embed: {
        color: 3447003,
        image: {
            url: (body.message)
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

        msg.delete();
      } 


      
module.exports.conf = {
    aliases: ['doggo', 'puppy']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "dog"

}