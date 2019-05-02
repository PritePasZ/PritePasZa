const Discord = require('discord.js');
const prefix = ("n!");
const translate = require('google-translate-api');
//const Langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];

module.exports.run = async (bot, message, args) => {

  let langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];

        let argie = args.join(` `).split(" | ")
        let langie = argie[0]
        let text = argie[1]

        if(langie === undefined){

            let emb = new Discord.RichEmbed()
            .setColor("#ff3320")
            .setTitle("Please choose language to translate to :")
            .setDescription("'afrikaans','albanian','amharic','arabic','armenian','azerbaijani',\n'bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese',\n'catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech',\n'danish','dutch',\n'english','esperanto','estonian',\n'filipino','finnish','french','frisian',\n'galician','georgian','german','greek','gujarati',\n'haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian',\n'icelandic','igbo','indonesian','irish','italian',\n'japanese','javanese',\n'kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz',\n'lao','latin','latvian','lithuanian','luxembourgish',\n'macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)',\n'nepali','norwegian','nyanja',\n'pashto','persian','polish','portugese','punjabi','\nromanian','russian',\n'samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish',\n'tajik','tamil','telugu','thai','turkish',\n'ukrainian','urdu','uzbek',\n'vietnamese','welsh','xhosa','yiddish','yoruba','zulu'")
            .addField("Usage", `n!translate <language> | <text>`)

            message.channel.send(emb)

        } else if(text === undefined) {

            let emb = new Discord.RichEmbed()
            .setColor("#00ff00")
            .setTitle("What do you want to translate?")
            .setDescription("'afrikaans','albanian','amharic','arabic','armenian','azerbaijani',\n'bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese',\n'catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech',\n'danish','dutch',\n'english','esperanto','estonian',\n'filipino','finnish','french','frisian',\n'galician','georgian','german','greek','gujarati',\n'haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian',\n'icelandic','igbo','indonesian','irish','italian',\n'japanese','javanese',\n'kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz',\n'lao','latin','latvian','lithuanian','luxembourgish',\n'macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)',\n'nepali','norwegian','nyanja',\n'pashto','persian','polish','portugese','punjabi','\nromanian','russian',\n'samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish',\n'tajik','tamil','telugu','thai','turkish',\n'ukrainian','urdu','uzbek',\n'vietnamese','welsh','xhosa','yiddish','yoruba','zulu'")
            .addField("Usage", `n!translate <language> | <text>`)

            message.channel.send(emb)

        } else {

            let totransLC = langie.toLowerCase()

            let translation;

            if(!langs.includes(totransLC)){

                let emb = new Discord.RichEmbed()
                .setColor("#ff3320")
                .setTitle("Language not found!")
                .setDescription("'afrikaans','albanian','amharic','arabic','armenian','azerbaijani',\n'bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese',\n'catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech',\n'danish','dutch',\n'english','esperanto','estonian',\n'filipino','finnish','french','frisian',\n'galician','georgian','german','greek','gujarati',\n'haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian',\n'icelandic','igbo','indonesian','irish','italian',\n'japanese','javanese',\n'kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz',\n'lao','latin','latvian','lithuanian','luxembourgish',\n'macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)',\n'nepali','norwegian','nyanja',\n'pashto','persian','polish','portugese','punjabi','\nromanian','russian',\n'samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish',\n'tajik','tamil','telugu','thai','turkish',\n'ukrainian','urdu','uzbek',\n'vietnamese','welsh','xhosa','yiddish','yoruba','zulu'")
                .addField("Usage", `n!translate <language> | <text>`)

            }

            translate(text, { to: totransLC }).then(trans =>{

                let emb = new Discord.RichEmbed()
                .setColor("#00ff00")
                .setDescription(trans.text)

                message.channel.send(emb)

            })

        }

 /* if (args[0] === undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("Please choose a language to translate to:")
    .setDescription('`afrikaans`, `albanian`, `amharic`, `arabic`, `armenian`, `azerbaijani`, `bangla`, `basque`, `belarusian`, `bengali`, `bosnian`, `bulgarian`, `burmese`, `catalan`, `cebuano`, `chichewa`, `chinese simplified`, `chinese traditional`, `corsican`, `croatian`, `czech`, `danish`, `dutch`, `english`, `esperanto`, `estonian`, `filipino`, `finnish`, `french`, `frisian`, `galician`, `georgian`, `german`, `greek`, `gujarati`, `haitian creole`, `hausa`, `hawaiian`, `hebrew`, `hindi`, `hmong`, `hungarian`, `icelandic`, `igbo`, `indonesian`, `irish`, `italian`, `japanese`, `javanese`, `kannada`, `kazakh`, `khmer`, `korean`, `kurdish (kurmanji)`, `kyrgyz`, `lao`, `latin`, `latvian`, `lithuanian`, `luxembourgish`, `macedonian`, `malagasy`, `malay`, `malayalam`, `maltese`, `maori`, `marathi`, `mongolian`, `myanmar (burmese)`, `nepali`, `norwegian`, `nyanja`, `pashto`, `persian`, `polish`, `portugese`, `punjabi`, `romanian`, `russian`, `samoan`, `scottish gaelic`, `serbian`, `sesotho`, `shona`, `sindhi`, `sinhala`, `slovak`, `slovenian`, `somali`, `spanish`, `sundanese`, `swahili`, `swedish`, `tajik`, `tamil`, `telugu`, `thai`, `turkish`, `ukrainian`, `urdu`, `uzbek`, `vietnamese`, `welsh`, `xhosa`, `yiddish`, `yoruba`, `zulu`');
    return message.channel.send(embed);
  } else {
    if (args[1] === undefined) {
      return message.channel.send('I cannot translate nothing!');
    } else {
      let transArg = args[0].toLowerCase();

      args = args.join(' ').slice(prefix.length);
      let translation;
      if (!Langs.includes(transArg)) return message.channel.send(`Invalid language ${message.author}! (maybe check for typos?)\nYou can see all languages with \`${prefix}translators language\`.`);
      args = args.slice(transArg.length);
      translate(args, {to: transArg}).then(res => {
        const embed = new Discord.RichEmbed()
        .setDescription(res.text)
        .setColor("00ff00");
        return message.channel.send(embed);
      });
    }
  } */

}

module.exports.help = {

  name: 'translate'
}