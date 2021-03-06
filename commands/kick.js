const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
		
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!kUser) return message.channel.send("사용법 : ~추방 @사람이름 사유");
		let kReason = args.join(" ").slice(22);
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("권한이 없습니다!");
		if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("그 사람을 추방할 수 없습니다!");
		
		let kickEmbed = new Discord.RichEmbed()
		.setTitle(" 추방 ")
		.setColor("#e56b00")
		.addField("추방된 유저", `${kUser}`)
		.addField("관리자", `<@${message.author.id}>`)
		.addField("사유", kReason);
		
		let kickChannel = message.guild.channels.find(`name`, "경고");
		if(!kickChannel) return message.channel.send("채널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");
		
		message.guild.member(kUser).kick(kReason);
		kickChannel.send(kickEmbed);
	
	 message.channel.send(`
 ${kUser} 가 추방되었습니다.
사유는 [ ${kReason} ] 입니다.
		      
		      `)
	
		return;
   }
	
module.exports.help = {
	name: "추방"
}
