
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let botembed = new Discord.RichEmbed()
        .setTitle("도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법", "~")
        .addField("기본 도움말", "기본 명령어 입니다.")
        .addField("명령어", "신고 말해 골라 등..")
        .addField("관리자 도움말", "관리자 명령어 도움말 입니다.")
        .addField("명령어", "경고 차단 추방 삭제 뮤트 등..")
        .addField("게임 도움말", "게임 명령어 입니다.")
        .addField("명령어", "가위바위보 돈내놔 등..")
        .addField("워터봇 개발자", "oAsIcS#5074")
	.addField("꼭 필요한 체널입니다.", "#인사 #경고 #신고");
        return message.channel.send(botembed);


}


module.exports.help = {
  name: "도움"
}
