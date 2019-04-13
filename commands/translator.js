const Discord = require("discord.js");
const translator = require("google-translate-api");

module.exports.run = async (bot, message, args) => {

  var input = args[0]
  let sign = args[1]
  var inputyee = args[2]
  
  
let for = message.content.replace(`~번역`, "")
let output;
  
  
  if (input == '영어') {
   
   translator(`${for}`, {to: 'en'}).then(res => {
    output = (res.text);
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("번역기")
    .addField(`${for} 을 영어로`, `${output}`)
       message.channel.send(calcembed)
       
    } else if (input == '한국어') {
   translator(`${for}`, {to: 'kr'}).then(res => {
    output = (res.text);
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("번역기")
    .addField(`${for} 을 한국어로`, `${output}`)
       message.channel.send(calcembed)
    }
  



}

module.exports.help = {
  name: "번역"
}
