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
          let rpsembed = new discord.RichEmbed()
            .addField("왜 안내냐?", "쫄았네");
          th.edit(rpsembed);
        } else {
          let paper = '✋' //2
	  let rock = '✊' //1
	  let sissor =  '✌' //0
	  
	  let mal;
		let bumal;
	  
	          if (collected.array()[0].emoji.name == computer_choice) {
          mal = "무승부를 했다!"
			  bumal = "이런.."
        }
        else if (collected.array()[0].emoji.name == paper && computer_choice == sissor) {
		mal = "${message.author.id} [ :hand_splayed: ] VS 워터 [ :v: ]"
		bumal = "졌다.."
        }
        else if (collected.array()[0].emoji.name == sissor && computer_choice == rock) {
		mal = "${message.author.id} [ :v: ] VS 워터 [ :fist: ]"
		bumal = "졌다.."
        }
        else if (collected.array()[0].emoji.name == rock && computer_choice == paper) {
		mal = "${message.author.id} [ :fist: ] VS 워터 [ :hand_splayed: ]"
		bumal = "졌다.."
        }     else if (collected.array()[0].emoji.name == sissor && computer_choice == paper) {
		mal = "${message.author.id} [ :v: ] VS 워터 [ :hand_splayed: ]"
		bumal = `${message.author.id} 승!`
        }
        else if (collected.array()[0].emoji.name == rock && computer_choice == sissor) {
		mal = "${message.author.id} [ :fist: ] VS 워터 [ :v: ]"
		bumal = `${message.author.id} 승!`
        }
        else if (collected.array()[0].emoji.name == paper && computer_choice == rock) {
		mal = "${message.author.id} [ :hand_splayed: ] VS 워터 [ :fist: ]"
		bumal = `${message.author.id} 승!`
        } else {
		mal = "이것은 전설의 오류!"
		bumal = "님이 진거임 ㅅㄱ"
	}

let rpsembed = new discord.RichEmbed()
            .setColor(0x808080)
            .addField(mal, bumal)


            th.edit(rpsembed)
	}
});

});

}
    




module.exports.help = {
  name: "가위바위보"
}
