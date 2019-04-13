const Discord = require("discord.js");
const client = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
 let reason = message.content.replace(`~공지`, "")

 if (message.author.id === "417571990820618250") {
let toSay = `${reason}`
this.client.guilds.map((guild) => {
  let found = 0
  toSay = `${reason}`
  let setting = guild.settings.get('공지')
  if (setting === 'off') return
  guild.channels.map((c) => {
    if (found === 0) {
      if (c.type === 'text') {
        if (c.permissionsFor(this.client.user).has('VIEW_CHANNEL') === true) {
          if (c.permissionsFor(this.client.user).has('SEND_MESSAGES') === true) {
            c.send(toSay)
            found = 1
          }
        }
      }
    }
  })
})
message.reply(`Execution completed. Shouted "${toSay}"`)
} else if (message.author.id === '251383432331001856') {
let toSay = `${args.msg}
~Chrono, SmoreSoftware Founder & Retired Developer`
this.client.guilds.map((guild) => {
  let found = 0
  toSay = `${args.msg}
~Chrono, SmoreSoftware Founder & Retired Developer
Want to turn these announcements off? Do \`${guild.commandPrefix}settings add announcements off\` to opt out.`
  let setting = guild.settings.get('announcements')
  if (setting === 'off') return
  guild.channels.map((c) => {
    if (found === 0) {
      if (c.type === 'text') {
        if (c.permissionsFor(this.client.user).has('VIEW_CHANNEL') === true) {
          if (c.permissionsFor(this.client.user).has('SEND_MESSAGES') === true) {
            c.send(toSay)
            found = 1
          }
        }
      }
    }
  })
})
message.channel(`
  공지 발신 성공!
  내용 : "${toSay}"
  `)
} else {return message.channel.send("권한이 없습니다") }
    
		
	};
	
module.exports.help = {
	name: "공지",
}
