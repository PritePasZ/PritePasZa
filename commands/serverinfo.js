const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField(`:bar_chart: \`Total Members\``, `\`${message.guild.memberCount}\``)
  .addField(`<:bustinsilhouette:553086092837126145> \`Users\``, `\`${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}\``, true)
  .addField(`:robot: \`Bots\``, `\`${message.guild.members.filter(m => m.user.bot).size}\``, true)
  .addField(`<:owner:511514761184280576> \`Owner\``, `\`${message.guild.owner.user.tag}\``, true)
  .addField(`:earth_americas: \`Region\``, `\`${message.guild.region}\``, true)
  .addField(`:card_index: \`Server ID\``, `\`${message.guild.id}\``, true)
  .addField(`:calendar: \`Join Date\``, `\`${message.member.joinedAt}\``, true)

  message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
