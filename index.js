const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require('fs');
const express = require('express')
const Canvas = require('canvas');
const path = require('path');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bk1031-lab-default-rtdb.firebaseio.com"
});

var db = admin.database();

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

client.on("message", async (message) => {
    if (message.channel.id == 756292294503563285) {
        checkLabCard(message).catch(e => {console.log(e)});
        message.delete({timeout: 1});
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
        message.channel.send(new Discord.MessageEmbed().setFooter('NOTE: This is a Dev Command. Some things may be broken.'));
    }
});

client.login(botconfig.token);

async function checkLabCard(message) {
    db.ref("lab_codes").child(message.content).once("value", async function(snapshot) {
        if (snapshot.val() != null) {
            db.ref("users").child(message.author.id).child("lab_code").set(message.content);
            db.ref("lab_codes").child(message.content).remove();
            message.author.send(`Hello, ${message.author.username}.\n`);
            setTimeout(() => {
                message.author.send(`Congratulations on finding a lab code, and welcome to the BK1031 Laboratory!`);
                setTimeout(async () => {
                    message.author.send(`Here is your lab card, keep it safe.`);
                    // Create a canvas and access the 2d context
                    const canvas = Canvas.createCanvas(1170, 701);
                    const ctx = canvas.getContext('2d');
                    // Load the background image and draw it to the canvas
                    const background = await Canvas.loadImage(
                        path.join(__dirname, './lab-card.png')
                    );
                    let x = 0;
                    let y = 0;
                    ctx.drawImage(background, x, y);
                    // Display lab code
                    Canvas.registerFont('./fonts/DINCondensed-Bold.ttf', { family: 'DIN Condensed' })
                    ctx.fillStyle = '#ffffff'
                    ctx.font = '55px DIN Condensed'
                    let codeText = `LAB ID: ${message.content}`;
                    x = 95
                    y = 300
                    ctx.fillText(codeText, x, y)
                    // Display user text
                    Canvas.registerFont('./fonts/DINCondensed-Bold.ttf', { family: 'DIN Condensed' })
                    ctx.fillStyle = '#ffffff';
                    if (message.author.username.length > 13) {
                        ctx.font = '75px DIN Condensed';
                    } else {
                        ctx.font = '130px DIN Condensed';
                    }
                    let nameText = `${message.author.username}`;
                    x = 95
                    y = 530
                    ctx.fillText(nameText, x, y)
                    //create a circular "mask"
                    ctx.beginPath();
                    ctx.arc(canvas.width - 450 + 175, canvas.height / 2 + 50, 175, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.clip();
                    // Draw profile picture
                    const pfp = await Canvas.loadImage(
                        message.author.displayAvatarURL({
                            format: 'png',
                            size: 512
                        })
                    )
                    x = canvas.width - 450;
                    y = canvas.height * (1/2) + 50 - 175;
                    ctx.drawImage(pfp, x, y, 350, 350)
                    // Attach the image to a message and send it
                    const attachment = new Discord.MessageAttachment(canvas.toBuffer());
                    message.author.send('', attachment);
                    client.channels.cache.get('832006575845015552').send('', attachment);
                    setTimeout(() => {
                        message.author.send('Your account has been linked with the Lab ID: `' + message.content + '`. Keep this Lab ID secure, as you will use it to authenticate yourself throughout the lab.');
                        setTimeout(() => {
                            message.author.send(`Don't forget to read and follow the lab <#831996761237094420>. Enjoy your stay, and happy researching!`);
                            message.member.roles.add(message.member.guild.roles.cache.find(role => role.name === "Lab Card"))
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }
        else {
            db.ref("users").child(message.author.id).child("failed_codes").child(message.content).set(message.content);
        }
    });
}