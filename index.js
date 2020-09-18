const botconfig = require("./botconfig.json");
const lab_codes = require("./lab_codes.json");
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
    // LAB CODE AREA
    if (message.channel.id == 756292294503563285) {
        // check code
        if (lab_codes.codes.includes(message.content)) {
            // FOUND A CODE!
            console.log("FOUND THE CODE!");
            let role = message.guild.roles.find(r => r.name === "Lab Card");
            message.member.addRole(role);
            // Send lab card to user
            message.author.send("Welcome to the lab!");
            // remove code from code list
            const index = lab_codes.codes.indexOf(message.content);
            if (index > -1) {
                lab_codes.codes.splice(index, 1);
            }
            lab_codes.users.push({
                "id": message.author.id,
                "code": message.content
            });
            fs.writeFile("lab_codes.json", JSON.stringify(lab_codes), err => { 
                if (err) throw err;
                console.log("Done writing");
            });
        }
        else {
            console.log("Wrong code kekw");
        }
        message.delete(0);
    }

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