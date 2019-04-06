const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("사용법 : ~차단 @사람이름 ");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("권한이 없습니다!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("그 사람을 추방할 수 없습니다!");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("차단")
    .setColor("#bc0000")
    .addField("차단된 유저", `${bUser}`)
    .addField("관리자", `<@${message.author.id}>`)
    .addField("사유", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "경고");
	 message.channel.send(`
                      
${bUser} 가 경고되었습니다.
사유는 [ ${bReason} ] 입니다.
		      
		      `)
    if(!incidentchannel) return message.channel.send("채널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
   }
	
module.exports.help = {
	name: "차단"
}
