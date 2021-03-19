module.exports = {
    name: 'fun-help',
    description: "this is a axl command!",
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('random')
       .setTitle('Commands')
       .setDescription('Weather,Meme,Giveaway,suggstion,play song, meme')
       .setFooter('Stores coming soon!')
       
       
        
       

       
       
       
       
       
       
       message.channel.send(newEmbed);


    }
} 