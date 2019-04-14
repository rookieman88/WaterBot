const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require("superagent");

 module.exports.run = async (bot, message, args) => {
 
       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

  if(!WatCoin[message.author.id]){
        WatCoin[message.author.id] = {
      WatCoin: 30
    };
  }

  let sCoins = WatCoin[message.author.id].WatCoin;
		
		let ddong = 1000

  if(sCoins < ddong) return message.reply("복권을 구매하려면 `1000` 원 이상의 돈이 필요합니다.");
		
		
let Ran1 = Math.floor(Math.random() * (100)) + 0; 
let Ran2 = Math.floor(Math.random() * (100)) + 0; 
let Ran3 = Math.floor(Math.random() * (100)) + 0; 
let Ran4 = Math.floor(Math.random() * (100)) + 0; 
let Ran5 = Math.floor(Math.random() * (100)) + 0; 
let Ran6 = Math.floor(Math.random() * (100)) + 0; 
let Ran7 = Math.floor(Math.random() * (100)) + 0; 

	
		

 let giveembed = new Discord.RichEmbed()
 .setColor("#6699ff")
 .setAuthor(`${message.author.username}`)
 .addField(`복권`, ` || ${Ran1} ${Ran2} ${Ran3} ${Ran4} ${Ran5} ${Ran6} ${Ran7} || `)
 
		
		
    message.channel.send(giveembed);
		
		

  WatCoin[message.author.id] = {
    WatCoin: sCoins - parseInt(ddong)
  };





 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
});

    
		
	};
	
module.exports.help = {
	name: "복권",
}
