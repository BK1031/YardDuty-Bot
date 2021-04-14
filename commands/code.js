const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require("../botconfig.json");
var admin = require("firebase-admin");

module.exports = {
	name: 'code',
	description: 'View and modify lab codes',
	execute(message, args) {
        var db = admin.database();
        if (message.author.id == 348220961155448833) {
            if (args.length == 2) {
                if (args[0] == "add") {
                    if (args[1] == "random") {
                        var code = (Math.floor(100000 + Math.random() * 900000)).toString();
                        db.ref("lab_codes").child(code).set(code);
                        message.channel.send("Added code: `" + code + "`");
                    }
                    else {
                        db.ref("lab_codes").child(args[1]).set(args[1]);
                        message.channel.send("Added code: `" + args[1] + "`");
                    }
                }
                else if (args[0] == "remove") {
                    db.ref("lab_codes").child(args[1]).remove();
                    message.channel.send("Removed code: `" + args[1] + "`");
                }
            }
            else {
                message.channel.send("Command Usage: ```" + botconfig.dev_prefix + botconfig.prefix + "code [add / remove] ######```")
            }
        }
        else {
            message.reply("Lol, nice try.")
        }
        return;
	},
};