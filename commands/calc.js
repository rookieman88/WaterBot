const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("권한이 없습니다.");
  if(!args[0]) return message.channel.send("사용법 : ~삭제 [삭제하고싶은 메시지 수]");
  let clearcount = parseInt(args[0]) + 1


}

module.exports.help = {
  name: "계산"
}
