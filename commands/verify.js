module.exports.run = async (bot, message, args) => {

if(message.guild.id === '542295644333801472') {

let ver = message.guild.roles.find(`name`, "회원");


await(message.author.addRole(ver.id));

message.reply(`
인증이 완료되었습니다!
')


} else { return }

};

module.exports.help = {
    name: '인증'
};
