const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 

 
 if (message.author.id === owner) {


bot.guilds.forEach(g => {
	 let reason = message.content.replace(`~공지 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} ] 입니다.
`)
	let cha = "570257780783448074"
	let ann = new Discord.RichEmbed()
	.addField(`워터봇 공지`, `${reason}`)
	.setFooter('Oasics#5074 가 발신한 공지입니다.')
let Ch = bot.channels.get(cha)
	Ch.sendEmbed(ann)

})
 } else {
	 message.channel.send('당신은 봇 관리자로 등록되어있지 않습니다.')
 }
	};
	
module.exports.help = {
	name: "공지",
}
