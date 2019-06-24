const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592661472736444416")
setInterval(function() {
channel.send(`NOoR NOoR NOoR NOoR`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
