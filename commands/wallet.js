const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let Coin = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {


  let Ucoin = Coin[message.author.id].Coin;

  message.channel.send(`<@${message.author.id}>님은 ${Ucoin} 만큼의 돈을 가지고있다!`);

}

module.exports.help = {
  name: "지갑"
}
