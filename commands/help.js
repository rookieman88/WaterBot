
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
    let helpemb = new Discord.RichEmbed()
    .setTitle('워터봇 도움말')
    .setDescription('워터봇은 [오픈소스](https://github.com/rookieman88/WaterBot/) 입니다. [워터봇 초대하기](http://short.kro.kr/워터봇초대가즈아!) \n이것은 워터봇 v1의 도움말입니다. v2 (OBT) 의 도움말은 "워터야 도움" 으로 확인하세요.')
    .setThumbnail(bot.user.avatarURL)
    .addField('서버 관리 명령어', '와! 규칙을 어기셨네요! 칭찬으로 경고를 드리겠습니다: ~경고 @사람 이유 \n 도배 불-편: ~뮤트 @사람 사유 (삭제를 원하신다면?: ~삭제 <삭제할 만큼 쓰세요>) \n경고 받았는데도 나대네: ~추방 @사람 이유 \n계속 들어오네?: ~차단 @사람 이유')
    .addField('워터봇 기본 명령어', '음? 워터봇 ||졸라|| 느려 터졌네;; : ~핑 \n아 이봇 어떻게쓰지?: ~도움 \n이렇게 좋은 봇이 얼마나 많은 서버에 있을까?: ~서버 \n이 이봇 불-편 하네: ~문의 <내용> \n안이 나 지금 없어: ~잠수 <사유>')
    .addField('와! 미니게임!', '음.. 얼마남았지?: ~지갑 \n저분 불쌍해 보이네: ~기부 @사람 <돈> \n와! 도박!: ~슬롯머신 <걸 돈> \n아 슬롯머신 별로 안주네: ~복권 \n빨리빨리!: ~타자대결 \n가위바위보: ~가위바위보 \n:hearts: ~궁합 <사람 1> <사람 2>')
    .addField('워터봇 정보', '이봇은 이미 v2 (OBT) 가 있으며 v2가 완성이 되었을 시 v1은 없어집니다. 기존의 서버관리는 [파이봇](https://discordapp.com/api/oauth2/authorize?client_id=574826830171734017&permissions=8&scope=bot) 에 옮겨질 예정이며 현재 v2에 추가된 미니게임은 주식투자, 끝말잇기 등 이 있습니다. \n [오아시스의 음악봇: 노트봇](https://discordapp.com/oauth2/authorize?client_id=574765070853210143&permissions=8&scope=bot) \n이 봇은 [팀 멜론](https://invite.gg/melonsupport) 봇입니다')
    
    message.channel.send(helpemb);
	
}


module.exports.help = {
  name: "도움"
}
