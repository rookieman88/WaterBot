const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send(message.channel.id)

}

module.exports.help = {
  name: "채널아이디"
}
