const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require("../botconfig.json");
const lab_codes = require("../lab_codes.json");

module.exports = {
	name: 'add-code',
	description: 'Add a new lab code',
	execute(message, args) {
        console.log(lab_codes);
        if (message.author.id == 348220961155448833) {
            if (args.length == 1) {
                lab_codes.codes.push(args[0]);
                fs.writeFile("../lab_codes.json", JSON.stringify(lab_codes), err => { 
                    if (err) throw err;
                    console.log("Done writing");
                    message.channel.send('Added `' + args[0] + "` as a lab code")
                });
            }
            else {
                message.channel.send('Command Usage: ```!add-code XXXXXX```');
            }
        }
        return;
	},
};