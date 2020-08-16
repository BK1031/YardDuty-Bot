const Discord = require('discord.js');

module.exports = {
	name: 'dev-verify',
	description: 'Get dev verify message for the server',
	execute(message, args) {
        // https://discohook.org/?message=eyJtZXNzYWdlIjp7ImNvbnRlbnQiOiJcbiIsImVtYmVkcyI6W3siY29sb3IiOjM5NDIzLCJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2dpdGh1Yi5jb20vQksxMDMxL0ltYWdlQXNzZXRzL2Jsb2IvbWFzdGVyL3ZlcmlmeS1kaXNjb3JkLnBuZz9yYXc9dHJ1ZSJ9fSx7InRpdGxlIjoiUmVxdWVzdCBWZXJpZmljYXRpb24iLCJkZXNjcmlwdGlvbiI6IlBsZWFzZSBsZWF2ZSBhIGxpbmsgdG8geW91ciBnaXRodWIvbGlua2VkaW4vd2Vic2l0ZS9ldGMgYWxvbmcgd2hpY2ggcm9sZSB5b3Ugd291bGQgbGlrZS4gT25jZSB5b3VyIHJlcXVlc3QgaXMgcHJvY2Vzc2VkLCB5b3VyIG1lc3NhZ2Ugd2lsbCBiZSBkZWxldGVkIGFzIGNvbmZpcm1hdGlvbiBhbmQgdG8gcmVkdWNlIGNsdXR0ZXIuIElmIG5vIHJvbGUgaXMgc3BlY2lmaWVkLCBvdXIgYWdlbnRzIHdpbGwgZ2l2ZSB5b3UgdGhlIHJvbGUgdGhhdCB0aGV5IHRoaW5rIGlzIGluZGljYXRpdmUgb2YgeW91ciBza2lsbHMvZXhwZXJpZW5jZS5cbiIsImNvbG9yIjozOTQyM30seyJ0aXRsZSI6IlZlcmlmaWNhdGlvbiBHdWlkZWxpbmVzIiwiZGVzY3JpcHRpb24iOiIxLiBNdXN0IGFjdHVhbGx5IGtub3cgaG93IHRvIGNvZGUgb3IgYSBzdHVkZW50IGxlYXJuaW5nIHRvIGNvZGVcbjIuIExpbmtzIHBvc3RlZCBtdXN0IGJlIHJlbGV2YW50IHRvIHRoZSBpbmRpdmlkdWFsJ3MgZXhwZXJpZW5jZSBhcyBhIGRldmVsb3BlclxuMy4gTXVzdCBiZSBhdCBsZWFzdCAxIHdlZWsgc2luY2UgbGFzdCB2ZXJpZmljYXRpb24gcmVxdWVzdCIsImNvbG9yIjozOTQyM30seyJ0aXRsZSI6IkV4YW1wbGUgUmVxdWVzdCIsImRlc2NyaXB0aW9uIjoiUmVxdWVzdCBmb3IgTWVnYSBEZXYsIGJlZW4gcHJvZ3JhbW1pbmcgc2luY2UgNXRoIGdyYWRlLCBmdWxsIHN0YWNrIG1vYmlsZSBkZXZlbG9wZXIuIGh0dHBzOi8vZ2l0aHViLmNvbS9iazEwMzEgaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vYmsxMDMxIGh0dHBzOi8vYmsxMDMxLmRldi9yZXN1bWUucGRmIn1dfX0
		message.channel.send(new Discord.RichEmbed()
			.setColor('#0099ff')
            .setImage("https://github.com/BK1031/ImageAssets/blob/master/verify-discord.png?raw=true")
        );
        message.channel.send(new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle("Request Verification")
            .setDescription("Please leave a link to your github/linkedin/website/etc along which role you would like. Once your request is processed, your message will be deleted as confirmation and to reduce clutter. If no role is specified, our agents will give you the role that they think is indicative of your skills/experience.")
        );
        message.channel.send(new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle("Verification Guidelines")
            .setDescription("1. Must actually know how to code or a student learning to code\n2. Links posted must be relevant to the individual's experience as a developer\n3. Must be at least 1 week since last verification request")
        );
        message.channel.send(new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle("Example Request")
            .setDescription("Request for Mega Dev, been programming since 5th grade, full stack mobile developer. https://github.com/bk1031 https://linkedin.com/in/bk1031 https://bk1031.dev/resume.pdf")
        );
	},
};