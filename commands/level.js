const Discord = require("discord.js");
const botconfig = require("../config");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 100;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("BLUE")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP till level up`, bot.user.displayAvatarURL);

  message.channel.send({ embed: lvlEmbed })

}
module.exports.conf = {
    aliases: ['xp', 'levels']
};

module.exports.help = {
  name: "level"
}