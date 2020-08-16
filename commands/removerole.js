const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please provide a user to remove a role too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to remove from said user.") 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")

    if(!rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, doesnt have the role!`)
    } else {
        await rMember.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`:white_check_mark: ${role.name}, has been removed from ${rMember.displayName}.`)
    }

    let removeroleembed = new RichEmbed()
    .setColor("#00ff00")
    .setAuthor(`${message.guild.name} Moderator Logs`, message.guild.iconURL)
    .addField(":pencil: Moderation:", "Addrole")
    .addField(":mute: Mute:", rMember.user.username)
    .addField(":tools: Moderator:", message.author.username)
    .addField(":date: Date:", message.createdAt.toLocaleString())
    
        message.channel.send(removeroleembed);
}   

module.exports.help = {
    name: "removerole"

}