var Discord = require('discord.js');

var bot = new Discord.Client();

console.log('봇 실행 완료');

bot.on('message', message => {

    var sender = message.author;

    var msg = message.content.toUpperCase();

    var prefix = '~';



    if(msg === prefix + '도움'){

      message.channel.send('~명령어 로 많은 커멘드를 사용해보세요!');
    }
   if(msg === prefix + '워터야 안녕'){

      message.channel.send('ㅎㅇㅎㅇ 나는 워터봇이라고 해~');
    }
   if(msg === prefix + '워터야'){

      message.channel.send('뭐 귀찮게 왜불러');
    }
});
					 
bot.login('NTEwNzAxNjgzODQ0ODQxNDc2.DswTmQ.5Va0Jbk8m0AwX6X-7ZK4Dcvvah0');
