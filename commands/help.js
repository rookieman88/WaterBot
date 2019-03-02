
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
let helpmenu = args[0] == "기본" ? 1 : args[0] == "게임" ? 2 : args[0] == "관리" ? 0 : 3;

 let botembed = new Discord.RichEmbed()
        .setTitle("도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법", "~")
        .addField("도움말들", "기본 / 관리 / 게임 / 음악 [개발중]")
        .addField("워터봇 개발자", "oAsIcS#5074")
	.addField("꼭 필요한 체널입니다.", "#인사 #경고 #신고");
let nhelp = new Discord.RichEmbed()
       .setTitle("기본 도움말")
       .setColor("#33cc33")
       .addField("명렁어들", "골라 삭제 말해 신고 등");
	
	let gmhelp = new Discord.RichEmbed()
       .setTitle("관리자 도움말")
       .setColor("#33cc33")
       .addField("명렁어들", "경고 추방 차단 뮤트 등");
	
	
	let ghelp = new Discord.RichEmbed()
       .setTitle("게임 도움말")
       .setColor("#33cc33")
       .addField("명렁어들", "주사위 동전 올인 기부 가위바위보 슬롯머신 등");
	
	
	if (helpmenu === 1) {
		return message.channel.send(nhelp);
	} else if (helpmenu === 2) {
		return message.channel.send(ghelp);
	} else if (helpmenu === 3) {
		return message.channel.send(gmhelp);
	} else {
		return message.channel.send(botembed);
	}
	
	 if (!args[0]) {
        message.channel.send(botembed);
      }


}


module.exports.help = {
  name: "도움"
}
