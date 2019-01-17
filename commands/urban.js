const Discord = require("discord.js");
const PREFIX = ">"
const urban = module.require("urban");

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Usage: >urban <category>");
        return;
    };

if(args.length < 1) return message.channel.send("Please enter a topic");
let str = args.join(" ");

urban(str).first(json => {
    if(!json) return message.channel.send("No results found for that topic")

        let embed = new Discord.RichEmbed()
            .setColor("GOLD")
            .setTitle(`Urban Dictionary | ${json.word}`)
            .setDescription(json.definition || "No definition")
            .addField("Example:", json.example || "No example")
            .addField("Upvotes:", json.thumbs_up || "0", true)
            .addField("Downvotes:", json.thumbs_down|| "0", true)
            .addField(`Link:`, `${json.permalink || "No Link"}`)
            .setFooter(`Written by ${json.author || "unknown"}`);

        message.channel.send({embed});
})





}

module.exports.conf = {
    aliases: ['ud']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "urban"

}