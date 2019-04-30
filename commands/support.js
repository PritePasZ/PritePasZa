const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let supportembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(bicon)
    .setTitle(":information_source: Support Info")
    .addField(":robot: **To see the bot commands use**", "n!help")
    .addField("<:plus:557903316496154645> **Invite Nexsiz use**", "n!invite")
    .addField("Support Server", "[PritePasZ | Discord Server™](https://discord.gg/P96Pr33)")

    message.channel.send(supportembed)

}

module.exports.help = {
    name: "support"
}
