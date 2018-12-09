const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./saves/warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("권한이 없습니다!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("사용법 : ~경고 @사람이름 사유");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("그 유저를 경고할 수 없습니다!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./saves/warns.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("경고")
  .addField("관리자", `<@${message.author.id}>`)
  .setColor("#fc6400")
  .addField("유저", `<@${wUser.id}>`)
  .addField("경고를 받은 횟수", warns[wUser.id].warns)
  .addField("사유", reason);

  let warnchannel = message.guild.channels.find(`name`, "경고");
  if(!warnchannel) return message.reply("체널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 4){
	  
	  let wEmbed = new Discord.RichEmbed()
		.setDescription("추방")
		.setColor("#DF0101")
		.addField("추방된 유저 ID", `${wUser.id}`)
		.addField("시각", message.createdAt)
		.addField("사유", "경고 4회");
		
		let warnchannel = message.guild.channels.find(`name`, "경고");
		
	warnchannel.send(wEmbed);
		 
        message.guild.member(wUser).kick(reason);
		 
		 return;

}
};

module.exports.help = {
  name: "경고"
}
