const Discord = require("discord.js");

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
    let choses = say.split(" ");
    let ranChose = Math.floor(Math.random() * (choses.length) + 0);
    input.channel.send(`"${choses[ranChose]}"~`)
};

module.exports.help = {
	name: "골라"
};
