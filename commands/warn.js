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




	
	let wCoins = warns[wUser.id].warns;
		
		
	
 message.channel.send(`
                      
${wUser} 가 경고되었습니다.
사유는 [ ${reason} ] 입니다.
경고를 받은 횟수는 ${wCoins} 입니다.
		      
		      `)


	superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
let welcomechannel = res.body;
		  if(!welcomechannel[message.guild.id]){ return }
		let msguild = welcomechannel[message.guild.id].welcomechannel	
		if(msguild === 0) { return }
		  let warnEmbed = new Discord.RichEmbed()
  .setTitle(` 경고 `)
  .addField("관리자", `<@${message.author.id}>`)
  .setColor("#fc6400")
  .addField("유저", `<@${wUser.id}>`)
  .addField("경고를 받은 횟수", warns[wUser.id].warns / 1)
  .addField("사유", reason);

  let warnchannel = message.guild.channels.find(`id`, chaid);
  if(!warnchannel) return message.reply("체널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");

  warnchannel.send(warnEmbed);
		
	});
		
		 superagent.put("https://api.jsonbin.io/b/5ca858e10f4c9334823b9515").send(warns).catch((err) => console.log(err));
});
	
};

module.exports.help = {
  name: "경고"
}
