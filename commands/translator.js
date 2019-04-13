const Discord = require("discord.js");
const translate = require("google-translate-api");

module.exports.run = async (bot, message, args) => {

  var input = args[0]
  let sign = args[1]
  var inputyee = args[2]
  
  
let fo = message.content.replace(`~번역 ${input}`, "")
let output;
  
  
  if (input == '영어') {
   
   translate(fo, {to: 'en'}).then(res => {
    output = (res.text);
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("번역기")
    .addField(`${fo} 을 영어로`, `${output}`)
       message.channel.send(calcembed)
   }).catch(err => {
    console.error(err);
});
       
    } else if (input == '한국어') {
   translate(fo, {to: 'ko'}).then(res => {
    output = (res.text);
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("번역기")
    .addField(`${fo} 을 한국어로`, `${output}`)
       message.channel.send(calcembed)
     }).catch(err => {
    console.error(err);
});
    }
                                        
  



}

module.exports.help = {
  name: "번역"
}
