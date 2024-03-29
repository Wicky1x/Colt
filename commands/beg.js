const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: [],
  cooldowns:[10],
  
 
  description: "beg for coins",
  async execute(client, message, args, Discord, cmd, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#d12828')
      .setDescription((`${message.author.username}, you begged and received ${randomNumber} **coins**`))

      message.channel.send(newEmbed);
  },
};