const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require('fs');
const express = require('express')

const app = express()
const port = 3001

const client = new Discord.Client();
client.commands = new Discord.Collection();

app.use(express.static('web'))

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`${client.user.username} is online!`);
});

client.on("message", (message) => {
    if (message.content.includes("http") && (message.content.includes("tenor") || message.content.includes("gif") || message.content.includes("gip"))) message.delete(0)
    message.attachments.forEach((attachmant) => {
        console.log(attachmant.url);
        if (attachmant.url.includes("gif")) message.delete(0);
    });
    if (!message.content.startsWith(botconfig.dev_prefix + botconfig.prefix) || message.author.bot) return;
    // Parse user input
    const args = message.content.slice((botconfig.dev_prefix + botconfig.prefix).length).split(/ +/);
    const command = args.shift().toLowerCase();
    // Check if command exists
    if (!client.commands.has(command)) {
        console.log(`Command ${command} does not exist`);
        return;
    };
    // Check for bot versioning
    if (botconfig.dev_prefix != "" && message.author.id != '348220961155448833') {
        console.log('Non-Dev tried to access a Dev Command');
        message.channel.send('Sorry buddy, you can\'t do that here');
        return;
    }
    client.commands.get(command).execute(message, args);
    if (botconfig.dev_prefix != "") {
        message.channel.send(new Discord.RichEmbed().setFooter('NOTE: This is a Dev Command. Some things may be broken.'));
    }
});

client.login(botconfig.token);