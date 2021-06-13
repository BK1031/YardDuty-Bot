const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require("../botconfig.json");
var admin = require("firebase-admin");

module.exports = {
	name: 'schedule',
	description: 'Show users\'s schedule',
	execute(message, args) {
        var db = admin.database();
        if (args.length == 0) {
            db.ref("users").child(message.author.id).child("schedule").once("value", function(snapshot) {
                if (snapshot.val() != null) {
                    Object.keys(snapshot.val()).forEach((key) => {
                        console.log(snapshot.val()[key]);
                    });
                }
                else {
                    message.channel.send("It looks like you do not have a class schedule set!\n\nCommand Usage: ```" + botconfig.dev_prefix + botconfig.prefix + "schedule set [period] [zoom url]```\nExample: ```" + botconfig.dev_prefix + botconfig.prefix + "schedule set 1 https://vcs.zoom.us/j/8715222020```");
                }
            });
        }
        else if (args.length == 3) {
            if (args[0] == "set" && parseInt(args[1]) != NaN) {
                db.ref("users").child(message.author.id).child("schedule").child("period" + parseInt(args[1]).toString()).set(args[2]);
            }
            else {
                message.channel.send("Sorry, I could not understand your input.\n\nCommand Usage: ```" + botconfig.dev_prefix + botconfig.prefix + "schedule set [period] [zoom url]```\nExample: ```" + botconfig.dev_prefix + botconfig.prefix + "schedule set 1 https://vcs.zoom.us/j/8715222020```");                
            }
        }
        else {
            message.channel.send("Command Usage: ```" + botconfig.dev_prefix + botconfig.prefix + "schedule set [period] [zoom url]```\nExample: ```" + botconfig.dev_prefix + botconfig.prefix + "schedule set 1 https://vcs.zoom.us/j/8715222020```");
        }
        return;
	},
};