const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
	
	       let warns;
	superagent.get("https://api.jsonbin.io/b/5ca858e10f4c9334823b9515/latest").then((res) => {
warns = res.body;

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("권한이 없습니다!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("사용법 : ~경고 @사람이름 사유");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("그 유저를 경고할 수 없습니다!");
  let reason = args.join(" ").slice(22);
	let warnuser = message.guild.members.get(args[0])

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;



  let warnEmbed = new Discord.RichEmbed()
  .setTitle(`${wUser}`)
  .setDescription("님이 경고되었습니다")
  .addField("관리자", `<@${message.author.id}>`)
  .setColor("#fc6400")
  .addField("유저", `<@${wUser.id}>`)
  .addField("경고를 받은 횟수", warns[wUser.id].warns / 1)
  .addField("사유", reason);

  let warnchannel = message.guild.channels.find(`name`, "경고");
  if(!warnchannel) return message.reply("체널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");

  warnchannel.send(warnEmbed);
	
	let wCoins = warns[wUser.id].warns;
		
		
	
 message.channel.send(`
                      
		      ${wUser} 가 경고되었습니다.
		      사유는 [ ${reason} ] 입니다.
		      경고를 받은 횟수는 ${wCoins} 입니다.
		      
		      `)

  if(warns[wUser.id].warns == 4){
	  
	  let wEmbed = new Discord.RichEmbed()
		.setDescription("추방")
		.setColor("#DF0101")
		.addField("추방된 유저 ", `${wUser.id}`)
		.addField("시각", message.createdAt)
		.addField("사유", "경고 4회");
		
		let warnchannel = message.guild.channels.find(`name`, "경고");
		
	warnchannel.send(wEmbed);
		 
        message.guild.member(wUser).kick(reason);
		 
		 return;

}
		
		 superagent.put("https://api.jsonbin.io/b/5ca858e10f4c9334823b9515").send(warns).catch((err) => console.log(err));
});
	
};

module.exports.help = {
  name: "경고"
}
