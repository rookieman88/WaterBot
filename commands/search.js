const discord = require("discord.js");
const google = require("google");

module.exports.run = async (bot, message, args) => {
    let say = args.join(" ").slice(0);
    let GoogleEmb = new discord.RichEmbed()
    .setAuthor(say)
    .setTitle("구글 검색 결과");
    google.resultsPerPage = 5;
    google(say, (err, res) => { 
        if (err) { console.log(err); }
        for (let count = 0; count < res.links.length; count++) {
            let result = res.links[count];
            if (result) {
                if (!result.title) {
                    GoogleEmb.addField(`${count+1}. ${result.href}`, `[Go Direct](${result.href}) ● ${result.description}`);
                } else {
                    GoogleEmb.addField(`${count+1}. ${result.title}`, `[Go Direct](${result.href}) ● ${result.description}`);
                }

            }
        }
        GoogleEmb.setColor(randomHexColor())
        .setURL(`https://google.com/search?q=${encodeURI(say)}`);
        message.channel.send(GoogleEmb);
    });
};

module.exports.help = {
    name: "검색"
};
