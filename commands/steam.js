const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { stripIndents } = require("common-tags");
const dateFormat = require("dateformat");

module.exports.run = async (bot, message, args) => {
        const token = "5D55A206F400646275F4396C77D79E2B";
        if(!args[0]) return message.channel.send(":x: Please provide an account name!");
        const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

        fetch(url).then(res => res.json()).then(body => {
            if(body.response.success === 42) return message.channel.send("I was unable to find a steam profile with that name, `https://steamcommunity.com/id/(get this name)`");

                const id = body.response.steamid;
                const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
                const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
                const state = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to trade", "Looking to play"];

        fetch(summaries).then(res => res.json()).then(body => {
            if(!body.response) return message.channel.send("I was unable to find a steam profile with that name, `https://steamcommunity.com/id/(get this name)`");
            const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

        fetch(bans).then(res => res.json()).then(body => {
            if(!body.players) return message.channel.send("I was unable to find a steam profile with that name, `https://steamcommunity.com/id/(get this name)`");
            const { NumberOfVACBans, NumberOfGameBans} = body.players[0];

            const embed = new RichEmbed()
                .setColor("#003b8b")
                .setAuthor(`Steam Services | ${personaname}`, avatarfull)
                .setThumbnail(avatarfull)
                .setDescription(stripIndents`**Real Name:** ${realname || "Unknown"}
                **:bar_chart: Status:** ${state[personastate]}
                **:flag_white: Country:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
                **:card_index: Account Created:** ${dateFormat(timecreated * 1000, "d/mm/yyyy (h:MM:ss TT)")}
                **:hammer: Bans:** Vac: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
                **:pushpin: Link:** [link to profile](${profileurl})`)
                .setTimestamp();

                message.channel.send(embed)
            })
        })
    })
}

module.exports.help = {
    name: "steam"
}