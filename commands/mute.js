

const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("사용법 : ~뮤트 @사람이름");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("그 사람을 뮤트시킬수 없습니다");
  let muterole = message.guild.roles.find(`name`, "Muted");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> 가 뮤트되었습니다.)}`);


//end of module
}

module.exports.help = {
  name: "뮤트"
}
