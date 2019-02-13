const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let coins = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  let user = message.author
  let usercoin = coins[user.id].coins;

  message.channel.send(`<@${message.author.id}>님은 ${usercoin} 만큼의 돈을 가지고있다!`);

}

module.exports.help = {
  name: "지갑"
}
