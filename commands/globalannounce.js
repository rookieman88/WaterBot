const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require('superagent');

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 let owners = process.env.owners
 

 
 if (owners.includes(message.author.id)) {
	 
	 if(args[0] === '에브리원') {

	 superagent.get("https://api.myjson.com/bins/sztu0").then((res) => {
let welcomechannel = res.body;

bot.guilds.forEach(g => {
	 let reason = message.content.replace(`~공지 에브리원 `, "")
	 
	   if(!welcomechannel[g.id]){
return
}
	let msguild = welcomechannel[g.id].welcomechannel	
	if (msguild === 0) { return }

	 
	let cha = msguild
	let ann = new Discord.RichEmbed()
	.addField(`워터봇 공지`, `${reason}`)
	.setColor(`#00ffc1`)
	.setFooter('${message.member.usertag} 가 발신한 공지입니다.')
let Ch = bot.channels.get(cha)
	Ch.sendEmbed(ann)
	Ch.send("[ @everyone ]")

})
	 	 let reason = message.content.replace(`~공지 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} + everyone ] 입니다.
`)
	 });
		 
	 } else {
		 
	
	 superagent.get("https://api.myjson.com/bins/sztu0").then((res) => {
let welcomechannel = res.body;

bot.guilds.forEach(g => {
	 let reason = message.content.replace(`~공지 `, "")
	 
	   if(!welcomechannel[g.id]){
return
}
	let msguild = welcomechannel[g.id].welcomechannel	
	if (msguild === 0) { return }

	 
	let cha = msguild
	let ann = new Discord.RichEmbed()
	.addField(`워터봇 공지`, `${reason}`)
	.setColor(`#00ffc1`)
	.setFooter('${message.member.usertag} 가 발신한 공지입니다.')
let Ch = bot.channels.get(cha)
	Ch.sendEmbed(ann)

})
	 	 let reason = message.content.replace(`~공지 `, "")
	 	message.channel.send(`
발신이 완료되었습니다!
공지 내용은 [ ${reason} ] 입니다.
`)
	 });	 
		 
	 }
 } else {
	 message.channel.send('당신은 봇 관리자로 등록되어있지 않습니다.')
 }
	};
	
module.exports.help = {
	name: "공지",
}
