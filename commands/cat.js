const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat//meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription(":cat: รูปแมว <a:glitchcat:537598075502460941>")
  .setImage(body.file);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "cat"
}
