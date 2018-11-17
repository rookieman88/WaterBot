const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("유저를 찾을 수 없습니다.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("권한이 없습니다!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("그 사람을 추방할 수 없습니다!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("차단")
    .setColor("#bc0000")
    .addField("차단된 유저", `${bUser} with ID ${bUser.id}`)
    .addField("관리자", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("시각", message.createdAt)
    .addField("사유", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "경고");
    if(!incidentchannel) return message.channel.send("채널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
   }
	
module.exports.help = {
	name: "차단"
}
