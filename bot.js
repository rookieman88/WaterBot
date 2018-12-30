const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client();({disableEveryone: true});
bot.commands = new Discord.Collection();

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

console.log('봇 실행 완료');

let statuses = ['워터야 도움 가즈아ㅏㅏ', 'Made by Oasics', '꼬우면 Oasics #7777']

bot.on('ready', async () => {
	setInterval(function() {
		
       let status = statuses[Math.floor(Math.random()*statuses.length)];
		
        bot.user.setPresence({ activity: { name: status }, status: 'online' });
		

	}, 10000	
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
	
});
					 
bot.login(process.env.BOT_TOKEN);
