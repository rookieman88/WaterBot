var Discord = require('discord.js');

var bot = new Discord.Client();

console.log('봇 실행 완료');

bot.on('ready', () => {
	bot.user.setActivity("~워터야 도움 ㄱㄱ")
})

bot.on('message', message => {

    var sender = message.author;

    var msg = message.content.toUpperCase();

    var prefix = '~';

    if(msg === prefix + '워터야 도움'){

      message.channel.send('~명령어 로 많은 커멘드를 사용해보세요!');
    }
   if(msg === prefix + '워터야 안녕'){

      message.channel.send('ㅎㅇㅎㅇ 나는 워터봇이라고 해~');
    }
   if(msg === prefix + '워터야'){

      message.channel.send('뭐 귀찮게 왜불러');
    }
   if(msg === prefix + '워터야 죽어'){

      message.channel.send('응 싫어 ㅅㄱ');
    }
    if(msg === prefix + '워터야 숙제해줘'){

      message.channel.send('나 손없어서 못해 ㅅㄱ');
    }
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '신입');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(`:bust_in_silhouette: | 신입 : ${member}`)
        .addField(`${member}님! ${member.guild.name}에 오신것을 환영합니다!`)
        .setFooter(`가입 날자 : `)
        .setTimestamp()

        channel.sendEmbed(embed);
});
	
bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '신입');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(`${member} 님이 {member.guild.name} 에서 퇴장하셨습니다!`)
        .setFooter(`퇴장 날자 : `)
        .setTimestamp()

        channel.sendEmbed(embed);
});

});
					 
bot.login(process.env.BOT_TOKEN);
