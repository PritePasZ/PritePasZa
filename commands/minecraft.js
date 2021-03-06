const Discord = require("discord.js");
const request = require("request");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (args[0] != null) {
        var url = 'https://api.mojang.com/users/profiles/minecraft/' + args[0];
                request(url, function(err, response, body2) {
                if(err) {
                    console.log(err);
                    return message.reply('Error...');
                }
                    try {
                      var body2 = JSON.parse(body2);
                   } catch(err) {
                      console.log(err);
                      let notvalidplayer = new Discord.RichEmbed()
                      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
                      .setColor(config.red)
                      .setDescription(`:no_entry: ไม่พบชื่อผู้เล่นนี้`);
                      message.reply(notvalidplayer);
                      return;
                   }


                var names = [];

                let foundfetchnamesembed = new Discord.RichEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL)
                .setColor(config.green)
                .setTitle("<a:Green:511136179702333440> Fetching names for " + args[0]);
                message.channel.send(foundfetchnamesembed).then(m => m.delete(1000));
                var url = 'https://api.mojang.com/user/profiles/' + body2.id + "/names";
                request(url, function(err, response, body) {
                    if(err) {
                        console.log(err);
                        return message.reply('Error...');
                    }
                    var body = JSON.parse(body);

                    var i = 0;

                    for (var i = 0; i < body.length; i++) {
                        names.push(body[i].name);
                    }

                    var namelist = names.join(", ");

                      const embed = new Discord.RichEmbed()
                      .setTitle("Name History")
                      .setURL("https://namemc.com")
                      .setAuthor(body2.name + "'s " + body.length + " past names", "https://minecraft-statistic.net/img/screen/default-icon.png")
                      .setColor('#2fa006')
                      .setDescription(" ")
                      .setThumbnail("https://crafatar.com/avatars/" + body2.id + "?size=100")
                      .setTimestamp()
                      .addField(":pencil: ชื่อผู้เล่นล่าสุด", body2.name)
                      .addField(":bar_chart: UUID", body2.id)
                      .addField(":card_index: ชื่อผู้ใช้ที่ผ่านมา", namelist)

                      message.channel.send({embed});
                    names = [];
                });
                        });
    } else {
      let notvaliduses = new Discord.RichEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .setColor(config.red)
      .setDescription(`:no_entry: \`การใช้งาน: b!minecraft (ชื่อผู้เล่น)\``);
        message.reply(notvaliduses);
    }
}

module.exports.help = {
  name: "minecraft"
}
