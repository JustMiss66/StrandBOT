const Discord = require("discord.js");
const PREFIX = ">"
const { get } = require('request-promise-native')

// This is the brackets in which the command goes in
exports.run = (client, message, args, tools) => {

    var images = ["https://i.imgur.com/2lacG7l.gif", "https://i.imgur.com/UWbKpx8.gif", "https://i.imgur.com/LUypjw3.gif", "https://i.pinimg.com/originals/c0/3f/58/c03f5817acde4b1c168d31ffe02c522e.gif", "data:image/jpeg;base64,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", "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853", "https://pa1.narvii.com/6401/9629e80dbe24f32a009ac51ee633a32dfbe1773f_hq.gif", "https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif?itemid=7552114", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor("BLUE")
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor("BLUE")
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> patted <@${message.author.id}>.. Oh wait! You can't pat yourself!`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> patted ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.conf = {
    aliases: []
};

module.exports.help = {
    name: "pat"
}
