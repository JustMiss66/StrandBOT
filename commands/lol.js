const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let rUser = message.mentions.users.first();
        if(!rUser) return message.channel.send("please mention a user!");
        let reason = args.slice(1).join(" ") || "No Reason Given"

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#00ff04")
        .addField("Report user:", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported by:", `${message.author} with ID ${message.author.id}`)
        .addField("Channel:", `${message.channel.id}`)
        .addField("Time:", message.createdAt)
        .addField("Reason:", reason);

        let reportschannel = message.guild.channels.find(c => c.name === "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
    
}

module.exports.conf = {
    aliases: ['tests']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "test"

}