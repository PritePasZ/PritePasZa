const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("<a:loading:573815730504597505> กำลังสร้าง Icon").then(m => m.delete(1000));
if(!message.guild.iconURL) return msg.edit("<:tickNo:576414524014329857> **เซิฟเวอร์นี้ไม่มี Icon**");

let iconembed = new Discord.RichEmbed()
.setColor("f4d442")
.setFooter("ใช้คำสั่งโดย " + message.author.tag)
.setImage(message.guild.iconURL)
.setTitle(":information_source: Icon")
.setDescription("[Icon URL link]("+message.guild.iconURL+")")

message.channel.send(iconembed)


 }

    module.exports.help = {
        name: "icon"
    }
