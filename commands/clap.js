const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send("**:x: Please provide some text to clapify**").then(msg => {msg.delete(5000)});

    message.channel.send(args.map(randomizeCase).join(':clap:'));

}

module.exports.help = {
    name: "clap"
}