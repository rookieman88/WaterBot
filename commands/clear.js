const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("권한이 없습니다.");
  if(!args[0]) return message.channel.send("?");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} 개의 매세지가 삭제되었습니다.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "삭제"
}