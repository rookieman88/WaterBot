/*

Water Bot 0.9

*/




// consts----------------------------------------
const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const API = require("discord.js");
const superagent = require("superagent");


// file reads-------------------------
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("음 인식이 안됨;;");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    let filenames = f.split(".");
    let filename = filenames[0];
    console.log(`${f} 로딩됨!`);
	bot.commands.set(props.help.name, props);
  });

});


// tokens---------------------------
let token = process.env.BOT_TOKEN







//login------------------------------------

bot.login(token)
	





//ready message------------------------------------

console.log('봇 실행 완료');





// bot status (error) -------------------------------------------

	bot.on("ready", async () => {
		
		bot.user.setActivity(`~도움 입력 ㄱㄱ`, {type: "PLAYING"});
	});





//welcome messages------------------------------



//user join
bot.on('guildMemberAdd', member => {
superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
let welcomechannel = res.body;
if(!welcomechannel[member.guild.id]){
	return
}
	
	let cha = welcomechannel[member.guild.id].welcomechannel
	if (cha === 0) { return }
	
let Ch = member.guild.channels.find('id', cha)
    let memberavatar = member.user.avatarURL
	
        let welcomembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .addField(":bust_in_silhouette: 누가 새로 왔네요 ", `${member.user.tag} ( ${member} ) 이분`)
	.setFooter(`ID : ${member.id}`)
		.setTimestamp()
		
		
        Ch.send(welcomembed);
		return;
});
});



//user leave
bot.on('guildMemberRemove', member => {
superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
let welcomechannel = res.body;
if(!welcomechannel[member.guild.id]){
	return
}
	let cha = welcomechannel[member.guild.id].welcomechannel
		if (cha === 0) { return }
	
	
let Ch = member.guild.channels.find('id', cha)
	
        let byembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .addField(":hand_splayed:  ㅂㅇㅂㅇ ", `${member.user.tag} ( ${member} ) `)
	.setFooter(`ID : ${member.id}`)
		.setTimestamp()
		
		
        Ch.send(byembed);
		return;
});
});


//----------------------------------------------------------stock (beta)



//commands---------------------------------------------




bot.afk = new Map();
bot.on("message", async message => {
	

	
  if (message.content.includes(message.mentions.users.first())) {
    bot.afk.forEach(key => {
      if (key.id == message.mentions.users.first().id) {
        message.guild.fetchMember(key.id).then(member => {
          let user_tag = member.user.tag;
          return message.channel.send(`**${user_tag}** 는 현재 잠수상태입니다. 사유: ${key.reason}`);
        });
      }
    });
  }

  bot.afk.forEach(key => {
    if (message.author.id == key.id) {
      bot.afk.delete(message.author.id);
      return message.channel.send(`${message.author.username}님의 잠수상태가 끝났습니다.`);
    }
});
	

	        let prefix = botconfig.prefix;
		let msgAr = message.content.split(" ");
		let msgc = message.content.slice(prefix.length);
		let i = msgAr[0];
		let pars = msgAr.slice(1);
		let verify = i.slice(prefix.length);
		let cmdFile = bot.commands.get(verify);

	

	
	if (!message.content.startsWith(prefix)) { return; } // Don't log Messages Without Prefix
		console.log(`${message.author.username.toString()} (${message.author.id.toString()})> ${message.content.toString()}`); // input Logging
	
	
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
	
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message,args);
		
	
	
	
	

/*
   if(msg === '워터야 도움'){
       let botembed = new Discord.RichEmbed()
        .setDescription("도움말")
        .setColor("#33cc33")
        .addField("워터야 도움 기본", "기본적인 명령어를 알려드립니다.")
        .addField("워터야 도움 관리자", "관리자용 명령어를 알려드립니다.")
        .addField("워터야 도움 게임", "미니게임에 대하여 알려드립니다.")
	.addField("꼭 필요한 체널입니다.", "#인사 #경고 #신고");
        
        return message.channel.send(botembed);
    }

   if(msg === '워터야 도움 기본'){
       let botembed = new Discord.RichEmbed()
        .setDescription("기본 도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법 :", "워터야")
        .addField("명령어 리스트", "안녕 죽어 숙제해줘 뭐해 몇살 비트박스 등..");
        
        return message.channel.send(botembed);
    }

   if(msg === '워터야 도움 관리자'){
      let botembed = new Discord.RichEmbed()
        .setDescription("관리자용 명령어 도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법 :", "~")
        .addField("명령어 리스트", "추방 차단 경고 삭제 등..");
        
        return message.channel.send(botembed);
    }
	
   if(msg === '워터야 도움 게임'){
      let botembed = new Discord.RichEmbed()
        .setDescription("관리자용 명령어 도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법 :", "~")
        .addField("명령어 리스트", "추방 차단 경고 삭제 등..");
        
        return message.channel.send(botembed);
    }
	
   if(msg === '워터야 안녕'){
      return message.channel.send("ㅎㅇ");
    }
   if(msg === '워터야 죽어'){

      return message.channel.send("대한민국 형법 제250조 1항 : 사람을 살해한 자는 사형, 무기 또는 5년 이상의 징역에 처한다.");
    }
   if(msg === '워터야 숙제해줘'){

      return message.channel.send("나 손없어서 못해 ㅅㄱ");
    }
   if(msg === '워터야 뭐해'){

      return message.channel.send("Zzz...Zzz...");
    }
	
   if(msg === '워터야 몇살'){

      return message.channel.send("3.14살");
    }

   if(cmd === `워터야`){

      return message.channel.send("뭐 귀찮게 왜불러");
    }
   if(msg === '워터야 결혼하자'){

      return message.channel.send("진짜야?? 사실 나  너 싫어함 ㅅㄱ");
    }
   if(msg === '워터야 비트박스'){

      return message.channel.send("나 비트박스 겁나 잘함. 북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기");

    }
  if(msg === '워터야 왜살아'){

      return message.channel.send("안죽어서.");
    }
  if(msg === '그치'){

      return message.channel.send("ㅇㅇ 그렇지..");
    }
 
    if(msg === 'ㅇㅈ?'){

      return message.channel.send("ㅇㅇㅈ!");
    }
	
*/
	
});
					
