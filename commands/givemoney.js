const Discord = require('discord.js');


exports.run = (bot, message, args) => {
	
	       let ccd;
	superagent.get("https://api.jsonbin.io/b/5c7136c3adda296e595a9726/latest").then((res) => {
		ccd = res.body;
	
	if (ccd = 0) {	// checks if cooldown is over.
	
        let cooldown = new Set();
	let cdseconds = 86400;
	cooldown.add(input.author.id);
	
       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;
                let YongDong = 100;
	
	if(!WatCoin[message.author.id]) WatCoin[message.author.id] = {
	 WatCoin: 0
 };


	WatCoin[message.author.id] = {
			WatCoin: WatCoin[message.author.id].WatCoin + (YongDong)
	};

        superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
		
		message.channel.send(`용돈 100원 지급 완료!`);
	});
	
		let CommandCooldown = new Set()
	
		let  nono = 1
	
	if(!ccd[message.author.id]) ccd[message.author.id] = {
	 ccd: 0
 };


	ccd[message.author.id] = {
			ccd: ccd[message.author.id].ccd + (nono)
	};

        superagent.put("https://api.jsonbin.io/b/5c7136c3adda296e595a9726").send(ccd).catch((err) => console.log(err));
		
			setTimeout(() => {
		cooldown.delete(input.author.id);
		        ccd[message.author.id] = {
			ccd: ccd[message.author.id].ccd - (nono)
	};

        superagent.put("https://api.jsonbin.io/b/5c7136c3adda296e595a9726").send(ccd).catch((err) => console.log(err));
	}, cdseconds * 1000);
		
	
	} else {
    message.channel.send(`내일 다시 ㄱㄱ`)
	};
	}):
}

module.exports.help = {
  name: "출첵"
}
