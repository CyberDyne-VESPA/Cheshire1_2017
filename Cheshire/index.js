var fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

//asynchronously read token from discord_token file (PUT API TOKEN there)
fs.readFile('./discord_token', 'utf8', function(error, data) {
    if (error) {
        //error reading token
        console.log('Error =>' + error);
        throw error;
    }

    client.on('guildMemberAdd', member => {
      //great user in #welcome channel
      const channel = member.guild.channels.find('name', 'welcome');
      //do nothing if the channel wasn't found on this server
      if (!channel) return;
      //send the message, mentioning the member
      channel.send(`Welcome to the server, ${member}`);
    });

    //no errors, proceed
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    //login with discord token with newlines and spaces stripped
    client.login(data.replace(/\s/g, ''));
});
