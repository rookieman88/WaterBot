module.exports.run = async (bot, message, args) => {

if(message.guild.id === '542295644333801472') {
    
    
if (message.member.roles.has('570219053071859725')) return message.reply("이미 인증되셨습니다!");


    
await(message.member.addRole('570219053071859725'));


message.channel.send(`
${message.author}
인증이 완료되었습니다!
`)

} else { return }

};

module.exports.help = {
    name: '인증'
};
