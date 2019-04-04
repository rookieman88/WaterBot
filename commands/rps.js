const Discord = module.require("discord.js");
const fs = require("fs");
const superagent = require("superagent");


function rand(low, high) {
    return Math.random() * (high + 1 - low) + low | 0;
}


module.exports.run = async (bot, message, args) => {


    
    

        let ai_choice = rand(0,2);
	let computer_choice;
	        if (ai_choice == 0) {
          computer_choice = ':v:'
      }
      else if (ai_choice == 1) {
          computer_choice = 'fist'
      } else {
         computer_choice = ':hand_splayed:'
      }
	  
	  
	      let rpsembed = new discord.RichEmbed()
      .setColor(0x0000ff)
      .addField("가위바위보", '안내면 진다.. 가위 바위... [제한시간 **30초**]')
    message.channel.send(rpsembed).then((th) => {
      th.react(':hand_splayed:')
      th.react(':v:')
      th.react(':fist:')
      th.awaitReactions(filter, {
        time: 30000,
        max: 1
      }).then((collected) => {
        if (!collected) {
          let timeoutembed = new discord.RichEmbed()
            .setColor(0x808080)
            .addField("왜 안내냐?", "쫄았네")
          th.edit(timeoutembed)
        } else {
          let paper = ':hand_splayed:'
	  let rock = ':fist:'
	  let sissor =  ':v:'
	  
	  let mal;
		let bumal;
	  
	          if (collected == computer_choice) {
          mal = "무승부를 했다!"
			  bumal = "이런.."
        }
        else if (collected == 2 && computer_choice == 0) {
		mal = "워터 [ :hand_splayed: ] VS <@${message.author.id}> [ :v: ]"
		bumal = "<@${message.author.id}> 승!"
        }
        else if (collected == 0 && computer_choice == 1) {
		mal = "워터 [ :v: ] VS <@${message.author.id}> [ :fist: ]"
		bumal = "<@${message.author.id}> 승!"
        }
        else if (collected == 1 && computer_choice == 2) {
		mal = "워터 [ :fist: ] VS <@${message.author.id}> [ :hand_splayed: ]"
		bumal = "<@${message.author.id}> 승!"
        }     else if (collected == 0 && computer_choice == 2) {
		mal = "워터 [ :v: ] VS <@${message.author.id}> [ :hand_splayed: ]"
		bumal = "졌다.."
        }
        else if (collected == 1 && computer_choice == 0) {
		mal = "워터 [ :fist: ] VS <@${message.author.id}> [ :v: ]"
		bumal = "졌다.."
        }
        else if (collected == 2 && computer_choice == 1) {
		mal = "워터 [ :hand_splayed: ] VS <@${message.author.id}> [ :fist: ]"
		bumal = "졌다.."
        }

let rpsyayembed = new discord.RichEmbed()
            .setColor(0x808080)
            .addField(mal, bumal)


            th.edit(rpsyayembed)
}
      
      
	  /*
	  
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
	 Winner = 1;
        }
        else if (ai_choice == 0 && user_choice == 1) {
          message.channel.send(`<@${message.author.id}>가 이겼다! +50 Coins`);
         Winner = 1;
        }
        else if (ai_choice == 1 && user_choice == 2) {
          message.channel.send(`<@${message.author.id}>가 이겼다! +50 Coins`);
         Winner = 1;
        } else {
          message.channel.send(`<@${message.author.id}>가 졌다!`);
        }
	  
      }
	
	
	
	if (Winner == 1) {
			WatCoin[message.author.id] = {
			WatCoin: WatCoin[message.author.id].WatCoin + (YongDong)
	}
	}
	
  superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));

	

      if (!args[0]) {
        message.channel.send("사용법 : ~가위바위보 (낼거)");
      }
	});
	
	
	*/
}




module.exports.help = {
  name: "가위바위보"
}
