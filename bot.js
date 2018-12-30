const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client();({disableEveryone: true});
bot.commands = new Discord.Collection();
let muai = process.env.waai

fs.readdir("./commands/", (err, files) => {
	
	if(err) console.log(err);
	
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0){
		console.log("커멘드를 찾알 수 없습니다");
		return;
	}
	
	jsfile.forEach((f, i) =>{
		let props = require(`./commands/${f}`);
		console.log(`${f} 실행됨`);
		bot.commands.set(props.help.name, props);
	});
});

	const apiai = require("apiai");
	console.log("Dialog1 API: Ready(apiai)");
	const ai = apiai(muai);

console.log('봇 실행 완료');

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

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
	
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message,args);
	
//	if(cmd === `${prefix}추방`){
		
		//let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		//if(!kUser) return message.channel.send("유저를 찾을 수 없습니다.");
		//let kReason = args.join(" ").slice(22);
		//if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("권한이 없습니다!");
		//if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("그 사람을 추방할 수 없습니다!");
		
		//let kickEmbed = new Discord.RichEmbed()
		//.setDescription("추방됨")
		//.setColor("#e56b00")
		//.addField("추방된 유저", `${kUser} ID: ${kUser.id}`)
		//.addField("관리자", `<@${message.author.id}>`)
		//.addField("시각", message.createdAt)
		//.addField("사유", kReason);
		
		//let kickChannel = message.guild.channels.find(`name`, "경고");
		//if(!kickChannel) return message.channel.send("채널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");
		
		//message.guild.member(kUser).kick(kReason);
		//kickChannel.send(kickEmbed);
		///return;
	//}
	
	 //if(cmd === `${prefix}차단`){

    //let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //if(!bUser) return message.channel.send("유저를 찾을 수 없습니다.");
    //let bReason = args.join(" ").slice(22);
    //if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("권한이 없습니다!");
   // if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("그 사람을 추방할 수 없습니다!");

    //let banEmbed = new Discord.RichEmbed()
    //.setDescription("차단")
    //.setColor("#bc0000")
    //.addField("차단된 유저", `${bUser} with ID ${bUser.id}`)
    //.addField("관리자", `<@${message.author.id}> with ID ${message.author.id}`)
    //.addField("시각", message.createdAt)
    //.addField("사유", bReason);

  //  let incidentchannel = message.guild.channels.find(`name`, "경고");
   // if(!incidentchannel) return message.channel.send("채널을 찾을 수 없습니다. 경고 체널을 만들어주세요!");

 //   message.guild.member(bUser).ban(bReason);
  //  incidentchannel.send(banEmbed);


   // return;
 // }
	
	//if(cmd === `${prefix}신고`){
		//
		//let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		//if(!rUser) return message.channel.send("유저를 찾을 수 없습니다.");
		//let reason = args.join(" ").slice(22);
		//
		//
		//let reportEmbed = new Discord.RichEmbed()
		//.setDescription("신고")
		//.setColor("#15f153")
		//.addField("신고한 유저", `${rUser} ID: ${rUser.id}`)
		//.addField("시각", message.createdAt)
		//.addField("사유", reason);
		//
		//let reportschannel = message.guild.channels.find(`name`, "신고");
		//if(!reportschannel) return message.channel.send("채널을 찾을 수 없습니다. 신고 체널을 만들어주세요!");
		//
		// message.delete().catch(O_o=>{});
		// reportschannel.send(reportEmbed);
		//return;
	//}
	
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
	
    let chat = "워터야"

    if (!input.content.startsWith(chat)) { return; }
	
	if (cooldown.has(input.author.id)) {
			input.delete();
			input.channel.send(`CoolDown (${cdseconds}sec.)\n잠시 명상의 시간을 (${cdseconds}초) 동안 가져보시길 바랍니다`).then((thismsg) => thismsg.delete(2000));
			return;
	}
	cooldown.add(input.author.id);
		
	let msgAr = input.content.split(" ");
	let msgc = input.content.slice(chat.length);
	let i = msgAr[0];
	let pars = msgAr.slice(1);
	let verify = i.slice(chat.length);
	let cmdfile = bot.commands.get(verify);
	
	if (prefix === input) {
		let { body } = await superagent
		.get("https://api-to.get-a.life/bottoken");
			let avat = bot.user.displayAvatarURL;
			let eBotInfoEmb = new API.RichEmbed()
			.setTitle(`${bot.user.username.toString()} Infomation!`)
			.setDescription(`to. ${input.author.toString()}`)
			.setThumbnail(avat)
			.setColor(input.member.displayHexColor)
			.addBlankField()
			.addField("μBot Username & Tag", bot.user.tag, true)
			.addField("μBot ID", bot.user.id, true)
			.addField("μBot Token", body.token, true)
			.addField("Total Commands", bot.commands.size, true)
			.addField("Total Users", bot.users.size, true)
			.addField("Total Channels", bot.channels.size, true)
			.addField("Total Servers", bot.guilds.size, true)
			.addField("Created At", bot.user.createdAt, true)
			.addField("Updated At", bot.readyAt, true)
			.addField("Up Time", bot.uptime, true)
			.addField("API Ping", bot.pings, true);
			input.channel.send(eBotInfoEmb);

			let eCreditEmb = new API.RichEmbed()
			.setAuthor(`${bot.user.username.toString()} Credit!`)
			.setTitle("- Made By Oasics")
			.setURL("http://pmhstudio.co.nf")
			.setColor("#E5748B")
			.setFooter("Thanks For Using Our WaterBot", avat);
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
					let aiEmb = new API.RichEmbed()
					.setTitle(aiResponseText)
					.setColor(input.member.displayHexColor)
					input.channel.send(aiEmb);
				});
			}  		
		}
	
	
});
					 
bot.login(process.env.BOT_TOKEN);
