

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

  
  let muteEmbed = new Discord.RichEmbed()
		.setDescription("뮤트")
		.setColor("#e56b00")
		.addField("뮤트된 유저", `${tomute}`)
		.addField("관리자", `<@${message.author.id}>`)
		.addField("시각", message.createdAt)
		
		let kickChannel = message.guild.channels.find(`name`, "경고");
		if(!kickChannel) return message.channel.send("채널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");
		
		kickChannel.send(muteEmbed);
		return;

//end of module
}

module.exports.help = {
  name: "뮤트"
}
