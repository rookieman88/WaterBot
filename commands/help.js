
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
    const helpemb = new Discord.RichEmbed({
		  "title": "워터봇 도움말",
		  "description": "워터봇의 도움말입니다. [v1.0] \n 워터봇은 오픈소스입니다 [소스보기](https://github.com/rookieman88/WaterBot)\n\n**명령어들\n────────────**",
		  "color": 7506394,
		  "fields": [
			{
			  "name": "서버 관리 명령어",
			  "value": "**관리자 권한이 필요합니다!**\n\n`유저 신고 : [~신고 <@타겟> <이유>]`\n`유저 경고 : [~경고 <@타겟> <이유>]`\n`유저 킥 : [~추방 <@타겟> <이유>]`\n`유저 벤 : [~차단 <@타겟> <이유>]`/n`유저 뮤트 : [~뮤트 <@타겟>]`",
			  "inline": true
			},
			{
			  "name": "워터봇 관련 명령어",
			  "value": "**말그대로 워터봇 관련 명령어 [워터봇 호스팅은 Heroku 를 사용합니다.]**\n\n` 워터봇 서버 핑 : [~핑]`",
			  "inline": true
			},
			{
			  "name": "게임 명령어",
			  "value": "**와! 게임!**\n\n` 주사위 : [~주사위]`\n`동전던지기 : [~동전]`\n`올인 : [~올인]`\n`슬롯머신 : [~슬롯머신]`/n`가위바위보 : [~가위바위보 <낼거>]`/n`얼마나 벌었지? : [~지갑]`",
			  "inline": true
			},
			{
			  "name": "메세지 관련 명령어",
			  "value": "**워터봇 메시지 관련 커맨드!**\n\n`말 대신하기 : [~말해 <말할것>]`\n`공지발신 [개발자만] : [~공지 <텍스트>]`/n`메시지 삭제 : [~삭제 <삭제하고싶은 메시지 수>]`",
			  "inline": true
			},
			{
			  "name": "또 많은 재미있는 커맨드들이 있습니다!",
			  "value": "**일상생활을 편리하게!**\n\n` 나는 선택장애다!! : [~골라 <1> <2>]`\n`날씨가 궁금하다! : [~날씨 <도시>]`",
			  "inline": true
			},
		  ]
		});
	message.author.send(helpemb);
message.channel.send("DM 으로 보냈습니다!");
}


module.exports.help = {
  name: "도움"
}
