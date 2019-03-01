const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("권한이 없습니다.");
  if(!args[0]) return message.channel.send("사용법 : ~삭제 [삭제하고싶은 메시지 수]");
  let clearcount = parseInt(args[0]) + 1
  message.channel.bulkDelete(clearcount).then(() => {
  message.channel.send(`${args[0]} 개의 매세지가 삭제되었습니다.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "삭제"
}
