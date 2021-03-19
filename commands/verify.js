const Discord = require('discord.js');
module.exports = {
    name: 'verify',
    aliases: ['ver'],
    description: "this command send verify!",
   async execute(client, message, args, Discord) {

    const GrapeTeam = '🔴 ';
    const LemonTeam = '🟠 ';

    let embed = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setTitle('Choose a team to play on!')
    .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
        + `${GrapeTeam} for yellow team\n`
        + `${LemonTeam } for blue team`);

let messageEmbed = await message.channel.send(embed);
messageEmbed.react('🟠');
messageEmbed.react('🔴');


  




}};