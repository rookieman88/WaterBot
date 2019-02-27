const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let say = args.join(" ").slice(0);
    let choses = say.split(" ");
    let ranChose = Math.floor(Math.random() * (choses.length) + 0);
    message.channel.send(`"${choses[ranChose]}"~`)
};

module.exports.help = {
	name: "골라"
};
