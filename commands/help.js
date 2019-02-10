
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let botembed = new Discord.RichEmbed()
        .setTitle("도움말")
        .setColor("#33cc33")
        .addField("기본 도움말", "기본적인 명령어를 알려드립니다.")
        .addField("관리자 도움말", "관리자용 명령어를 알려드립니다.")
        .addField("미니게임 도움말", "미니게임에 대하여 알려드립니다.")
	.addField("꼭 필요한 체널입니다.", "#인사 #경고 #신고");
        return message.channel.send(botembed);

  let normalbotembed = new Discord.RichEmbed()
         .setTitle("기본 도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법", "~")
        .addField("명령어", "곧 개발됩니다..")
        .addField("워터봇 개발자", "NotOasics#5074")
        return message.channel.send(normalbotembed);

  let adminbotembed = new Discord.RichEmbed()
         .setTitle("관리자 도움말")
        .setColor("#33cc33")
        .addField("명령어", "신고 경고 차단 추방 삭제 뮤트 등..")
        return message.channel.send(adminbotembed);

  let gamebotembed = new Discord.RichEmbed()
         .setTitle(" 도움말")
        .setColor("#33cc33")
        .addField("명령어", "곧 개발됩니다..")
        return message.channel.send(gamebotembed);


});

}

module.exports.help = {
  name: "도움"
}
