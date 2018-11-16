var Discord = require('discord.js');

var bot = new Discord.Client();

const botconfig = require("./botconfig.json");

console.log('봇 실행 완료');

bot.on('ready', () => {
	bot.user.setActivity("~워터야 도움 해봐")
})


let prefix = prefixes[message.guild.id].prefixes;

bot.on('message', message => {

    var sender = message.author;

    var msg = message.content.toUpperCase();
	
    let prefix = botconfig.prefix;

    if(msg === '${prefix}워터야 도움'){

      message.channel.send('~명령어 로 많은 커멘드를 사용해보세요!');
    }
   if(msg === '${prefix}워터야 안녕'){

      message.channel.send('ㅎㅇㅎㅇ 나는 워터봇이라고 해~');
    }
   if(msg === '${prefix}워터야'){

      message.channel.send('뭐 귀찮게 왜불러');
    }
   if(msg === '${prefix}워터야 죽어'){

      message.channel.send('응 싫어 ㅅㄱ');
    }
    if(msg === '${prefix}워터야 숙제해줘'){

      message.channel.send('나 손없어서 못해 ㅅㄱ');
    }

});
					 
bot.login(process.env.BOT_TOKEN);
