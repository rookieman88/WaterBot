const discord = module.require("discord.js");
const fs = require("fs");
const superagent = require("superagent");


function rand(low, high) {
    return Math.random() * (high + 1 - low) + low | 0;
}


module.exports.run = async (bot, message, args) => {


     let filter = (reaction, user) => (reaction.emoji.name === '✌' || reaction.emoji.name === '✊' || reaction.emoji.name === '✋') && user.id === message.author.id
    

        let ai_choice = rand(0,2);
	let computer_choice;
	        if (ai_choice == 0) {
          computer_choice = '✌'
      }
      else if (ai_choice == 1) {
          computer_choice = '✊'
      } else {
         computer_choice = '✋'
      }
	  
	  
	      let rpsembed = new discord.RichEmbed()
      .setColor(0x0000ff)
      .addField("가위바위보", '안내면 진다.. 가위 바위... [제한시간 **30초**]')
    message.channel.send(rpsembed).then((th) => {
      th.react('✋')
      th.react('✌')
      th.react('✊')
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
          let paper = '✋'
	  let rock = '✊'
	  let sissor =  '✌'
	  
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
});

});

}
    




module.exports.help = {
  name: "가위바위보"
}
