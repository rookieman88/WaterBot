const Discord = module.require("discord.js");
const fs = require("fs");


function rand(low, high) {
    return Math.random() * (high + 1 - low) + low | 0;
}


module.exports.run = async (bot, message, args) =>{

    let Coin = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));
    
    	if(!Coin[message.author.id]) Coin[message.author.id] = {
	 Coin: 0
 };
    
    let Gcoin = 50
    
  if (args[0]) {
        // get user choice && user choice
        let ai_choice = rand(0,2);
        let user_choice = args[0] == "바위" ? 1 : args[0] == "보" ? 2 : args[0] == "가위" ? 0 : 3;
      
      
      if (user_choice == 0) {
          message.channel.send(`<@${message.author.id}>은(는) 가위 :v: 를 냈다!`);
      }
      else if (user_choice == 1) {
          message.channel.send(`<@${message.author.id}>은(는) :fist: 를 냈다!`);
      } 
      else if (user_choice == 2) {
          message.channel.send(`<@${message.author.id}>은(는) 보 :hand_splayed: 를 냈다!`); 
      } else {
          message.channel.send(`<@${message.author.id}>, 가위,바위,보 밖에 낼수 없다!`)
      }
      
      if (ai_choice == 0) {
          message.channel.send(`워터는 가위 :v: 를 냈다!`);
      }
      else if (ai_choice == 1) {
          message.channel.send(`워터는 바위 :fist: 를 냈다!`);
      } else {
          message.channel.send(`워터는 보 :hand_splayed: 를 냈다!`); 
      }
      
        // if their choices are same its a draw :D
        if (ai_choice == user_choice) {
          message.channel.send("무승부를 했다!");
        }
        else if (ai_choice == 2 && user_choice == 0) {
          message.channel.send(`<@${message.author.id}>가 이겼다! +50 Coins`);
            	Coin[message.author.id] = {
			Coin: Coin[message.author.id].Coin + (YongDong)
	};

        }
        else if (ai_choice == 0 && user_choice == 1) {
          message.channel.send(`<@${message.author.id}>가 이겼다! +50 Coins`);
            	Coin[message.author.id] = {
			Coin: Coin[message.author.id].Coin + (YongDong)
	};

        }
        else if (ai_choice == 1 && user_choice == 2) {
          message.channel.send(`<@${message.author.id}>가 이겼다! +50 Coins`);
            	Coin[message.author.id] = {
			Coin: Coin[message.author.id].Coin + (YongDong)
	};

        } else {
          message.channel.send(`<@${message.author.id}>가 졌다!`);
        }
      }

      if (!args[0]) {
        message.channel.send("사용법 : ~가위바위보 (낼거)");
      }
	  fs.writeFile("./saves/coins.json", JSON.stringify(Coin), (err) => {
    if(err) cosole.log(err)
  });
	
    }



module.exports.help = {
  name: "가위바위보"
}
