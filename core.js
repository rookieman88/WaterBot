/*
	WaterBo v1.0 Core  by μBot v7.0 Core.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

	* Requests Node.js & Discord.js
*/
console.log("----------------시작됨----------------------");

// Basic Requires________________________________

    // Commands
    const cmds = require("fs");
    console.log("cmdColletor: Ready(fs)");

	// Token
	let wattf = require("./Token!.json");
	let watto = process.env.BOT_TOKEN
	console.log("봇 토큰: 준비 완료!(" + watto + ")");
	let watai = "5fe1fcced673499381b545adfb83bfbf";
	console.log("apiai: 준비완료!(" + watai + ")");
	let prefix = "~";
	console.log("프리픽스: 준비완료!(" + prefix + ")");
	let nasa = "GpELYI28U6YMlWtNjDcF5IOunjRi9ZIFPJcTHDdo";
	console.log("Base Prefix: Ready(" + nasa + ")");


    // User Cool Down
    let cooldown = new Set();
	let cdseconds = process.env.defaultCooldown || wattf.defaultCooldown || 5;

	// api.ai (Dialogflow v1)
	const apiai = require("apiai");
	console.log("Dialog1 API: Ready(apiai)");
	const ai = apiai(watai);

	// Web Json Reader
	const superagent = require("superagent");
	console.log("SuperAgent: Ready(superagent)");

	// Discord API
	const API = require("discord.js");
	console.log("Discord API: Ready(discord.js)");


// Bot Login_____________________________________

	// Get Bot Client
	const wat = new API.Client();

	// Bot Login with Token
	wat.login(watto);

	// Get Bot Command
	wat.commands = new API.Collection();


// Read Commands_________________________________

	cmds.readdir("./commands/", (err, files) => {

		// Command Files Exist Check
		let jsfile = files.filter((f) => f.split(".").pop() === "js");
		if (jsfile.length <= 0) {
			console.log("Error(E404): Couldn't find commands.");
			return;
		}

		jsfile.forEach((f, i) => {
			let props = require(`./commands/${f}`);
			let filenames = f.split(".");
			let filename = filenames[0];
			wat.commands.set(filename, props);
			wat.commands.set(props.help.name, props);
			wat.commands.set(props.help.description, props);
			console.log(`커멘드 (${filename}, ${props.help.name}, ${props.help.description}) 가 준비되었습니다 `);
		});
	});


// Bot Readying__________________________________
	wat.on("ready", async () => {
		console.log("-----------------------------------------------------------\n\n	워터봇이 실행되었습니다! | " + wat.commands.size + " Commands | " + wat.guilds.size + " Servers | " + wat.channels.size + " Channels | " + wat.users.size + " Users\n\nInput Log:");
	});

  const activities_list = [
    "Made by Oasics",
    "2019년 5월 정식출시!",
    "꼬우면 Oasics #7777",
    "워터야 도움 가즈아ㅏㅏ"
    ];


wat.on('ready', () => {
     setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        wat.user.setActivity(activities_list[index]);
    }, 5000);
});

// Bot Commanding________________________________
	wat.on("message", async (input) => {
		if (`${input.author.id}` === `${wat.user.id}`) { return; } // Don't Check Message Itself!
		if (!input.guild) { // ignore DM
			input.reply("DM에선 실행되지 않습니다.. 서버에서 해주세요!").then((thismsg) => thismsg.delete(2000));
			return;
		}

		if (input.guild.id === "264445053596991498") { return; }

		superagent.get(`https://mubotdb.herokuapp.com/action/UserTyped/${input.author.id}/${wat.user.id}`).catch((err) => console.log(err));


		if (!input.content.startsWith(prefix)) { return; } // Don't log Messages Without Prefix
		console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging

		// CoolDown System
		if (cooldown.has(input.author.id)) {
			input.delete();
			input.channel.send(`CoolDown (${cdseconds}sec.)\n잠시 명상의 시간을 (${cdseconds}초) 동안 가져보시길 바랍니다`).then((thismsg) => thismsg.delete(2000));
			return;
		}
		cooldown.add(input.author.id);

		let msgAr = input.content.split(" ");
		let msgc = input.content.slice(prefix.length);
		let i = msgAr[0];
		let pars = msgAr.slice(1);
		let verify = i.slice(prefix.length);
		let cmdFile = wat.commands.get(verify);

		if (prefix === input) {
			let { body } = await superagent
				.get("https://api-to.get-a.life/bottoken");
			let avat = wat.user.displayAvatarURL;
			let eBotInfoEmb = new API.RichEmbed()
			.setTitle(`${wat.user.username.toString()} Infomation!`)
			.setDescription(`to. ${input.author.toString()}`)
			.setThumbnail(avat)
			.setColor(input.member.displayHexColor)
			.addBlankField()
			.addField("워터봇의 이름과 테그", wat.user.tag, true)
			.addField("ID", wat.user.id, true)
			.addField("커멘드", wat.commands.size, true)
			.addField("사용자", wat.users.size, true)
			.addField("체널", wat.channels.size, true)
			.addField("서버", wat.guilds.size, true)
			.addField("업타임", wat.uptime, true)
			.addField("핑", wat.pings, true);
			input.channel.send(eBotInfoEmb);

		} else {
			if (cmdFile) {
				cmdFile.run(wat,input,pars,prefix,nasa);
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
					.setDescription("워터봇 Ai v1");
					input.channel.send(aiEmb);
				});
			}
		}

	setTimeout(() => {
		cooldown.delete(input.author.id);
	}, cdseconds * 1000);
});

