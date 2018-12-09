const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
		
		let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!rUser) return message.channel.send("사용법 : ~신고 @사람이름 ");
		let reason = args.join(" ").slice(22);
		
		
		let reportEmbed = new Discord.RichEmbed()
		.setDescription("신고")
		.setColor("#15f153")
		.addField("신고한 유저", `${rUser} ID: ${rUser.id}`)
		.addField("시각", message.createdAt)
		.addField("사유", reason);
		
		let reportschannel = message.guild.channels.find(`name`, "신고");
		if(!reportschannel) return message.channel.send("채널을 찾을 수 없습니다. 신고 체널을 만들어주세요!");
		
		 message.delete().catch(O_o=>{});
		 reportschannel.send(reportEmbed);
		return;
	}
	
module.exports.help = {
	name: "신고"
}
