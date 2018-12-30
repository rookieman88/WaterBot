/*

Water Bot 0.5

*/



console.log("bot.js 시작됨");



// consts----------------------------------------
const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client();({disableEveryone: true});
bot.commands = new Discord.Collection();
let muai = process.env.waai



// file reads-------------------------
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


// tokens---------------------------
let token = process.env.BOT_TOKEN
let waai = process.env.waai
let prefix = "~"



//cool down----------------------------------
 let cooldown = new Set();
	let cdseconds = 5;




// ai (dialogflow v1)--------------------------------------

const apiai = require("apiai");
	console.log("Dialog1 API: Ready(apiai)");
	const ai = apiai(waai);
        console.log(process.env.waai)





//login------------------------------------

bot.login(token)






//ready message------------------------------------

console.log('봇 실행 완료');





// bot status-------------------------------------------
const activities_list = [
    "Made by Oasics", 
    "2019년 5월 정식출시!",
    "꼬우면 Oasics #7777", 
    "워터야 도움 가즈아ㅏㅏ"
    ];


bot.on('ready', () => {
     setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 5000);
});



//welcome messages------------------------------



//user join
bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.find('name', '인사');
    let memberavatar = member.user.avatarURL
    if (!welcomechannel) return;
	
        let welcomembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .setThumbnail(memberavatar)
        .addField(":bust_in_silhouette: | 신입등장! ", `${member}`)
        .addField("ID :", "**[" + `${member.id}` + "]**")
		.addField("서버에 오신것을 환영합니다!", "반드시 서버의 규칙을 읽어주세요!")
		.addField("시각", "가입날자 :")
		.setTimestamp()
		
		
        welcomechannel.sendEmbed(welcomembed);
		return;
});



//user leave
bot.on('guildMemberRemove', member => {
	let welcomechannel = member.guild.channels.find('name', '인사');
    let memberavatar = member.user.avatarURL
    if (!welcomechannel) return;
	
        let byembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .setThumbnail(memberavatar)
        .addField(":hand_splayed:  | 퇴장 ", `${member}`)
        .addField("ID :", "**[" + `${member.id}` + "]**")
		.addField("시각", "퇴장날자 :")
		.setTimestamp()
		
		
        welcomechannel.sendEmbed(byembed);
		return;
});



//commands---------------------------------------------

bot.on("message", async message => {
	
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);	
	
	let msgAr = input.content.split(" ");
	let msgc = input.content.slice(prefix.length);
	let i = msgAr[0];
	let pars = msgAr.slice(1);
	let verify = i.slice(prefix.length);
	let cmdFile = mu.commands.get(verify);


if (!input.content.startsWith(prefix)) { return; } // Don't log Messages Without Prefix
		console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging

// CoolDown System
		if (cooldown.has(input.author.id)) {
			input.delete();
			input.channel.send(`CoolDown (${cdseconds}sec.)\n잠시 명상의 시간을 (${cdseconds}초) 동안 가져보시길 바랍니다`).then((thismsg) => thismsg.delete(2000));
			return;
		}
		cooldown.add(input.author.id);
	
	
	if(message.author.bot) return;
	
	
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message,args);
	
	
	var msg = message.content.toUpperCase();

   if(msg === '워터야 도움'){
       let botembed = new Discord.RichEmbed()
        .setDescription("도움말")
        .setColor("#33cc33")
        .addField("워터야 도움 기본", "기본적인 명령어를 알려드립니다.")
        .addField("워터야 도움 관리자", "관리자용 명령어를 알려드립니다.")
        .addField("워터야 도움 음악", "음악봇에 대하여 알려드립니다.")
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
	
   if(msg === '워터야 도움 관리자'){
      let botembed = new Discord.RichEmbed()
        .setDescription("관리자용 명령어 도움말")
        .setColor("#33cc33")
        .addField("워터를 부르는 방법 :", "워터야 음악")
        .addField("명령어 리스트", "아직 만드는중..");
        
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

   if(cmd === `${prefix}워터야`){

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

	
if (prefix === input) {
			let { body } = await superagent
				.get("https://api-to.get-a.life/bottoken");
			let avat = mu.user.displayAvatarURL;
			let eBotInfoEmb = new bot.RichEmbed()
			.setTitle(`${mu.user.username.toString()} Infomation!`)
			.setDescription(`to. ${input.author.toString()}`)
			.setThumbnail(avat)
			.setColor(input.member.displayHexColor)
			.addBlankField()

			input.channel.send(eBotInfoEmb);

			let eCreditEmb = new bot.RichEmbed()
			.setAuthor(`${mu.user.username.toString()} Credit!`)
			.setTitle("- Made By PMH Studio / PMH & WSF")
			.setURL("http://pmhstudio.co.nf")
			.setColor("#E5748B")
			.addField("PMH Studio / PMH", "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 매니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
			.addField("WHTIESNWOFLAEKS (하얀눈송이)", "```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)")
			.addField("CS (칠성)", "```\n『 결국은 노가다 』\n『 에에에 』\n\n복사 붙여넣기\n하다보면 완성인 노가다!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Marketing (마케터)")
			.setFooter("Thanks For Using Our μBot!", avat);
			input.channel.send(eCreditEmb);
		} else {
			if (cmdFile) {
				cmdFile.run(mu,input,pars,prefix,nasa);
				} else {
				// AI(api.ai, Dialogflow v1) Intents
				let aiRequest = ai.textRequest(msgc, {
					sessionId: input.author.id
				});

				aiRequest.end();

				aiRequest.on("response", function(response) {
					let aiResponseText = response.result.fulfillment.speech;
					let aiResponseArr = aiResponseText.split(" ");
					let aiEmb = new bot.RichEmbed()
					.setTitle(aiResponseText)
					.setColor(input.member.displayHexColor)
					.setDescription("Powered by Google Dialogflow");
					input.channel.send(aiEmb);
				});
			}  		
		}
		
	setTimeout(() => {
		cooldown.delete(input.author.id);
	}, cdseconds * 1000);
	
});
					
