const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
let helpmenu = args[0] == "뮤봇해킹" ? 1 : args[0] == "살아있냐" ? 2 : 3;

	superagent.get("https://api.jsonbin.io/b/5c62c948ad5128320af85de0/latest").then((res) => {
let UsersCoin = res.body;

	if (helpmenu === 1) {
		return message.channel.send("뮤봇 해킹 시도. mu!뮤트코인으로 확인하세요");
    
    let hackk = 9999
    
          UsersCoin[input.author.id] = {
          UsersCoin: UsersCoin[input.author.id].UsersCoin + (hackk / 1)
 };
	} else if (helpmenu === 2) {
		return message.channel.send("ㅇㅇ 살아있음");
	} else { return message.channel.send("그런거 없음") }
   
	 if (!args[0]) {
        return message.channel.send("그런거 없음");
      }
 superagent.put("https://api.jsonbin.io/b/5c62c948ad5128320af85de0").send(UsersCoin).catch((err) => console.log(err));
 });

}


module.exports.help = {
  name: "테스트"
}
