const Discord = require('discord.js');

module.exports = {
	name: 'welcome',
	description: 'Get welcome message for the server',
	execute(message, args) {
        // https://discohook.org/?message=eyJtZXNzYWdlIjp7ImNvbnRlbnQiOiJcbiIsImVtYmVkcyI6W3siaW1hZ2UiOnsidXJsIjoiaHR0cHM6Ly9naXRodWIuY29tL0JLMTAzMS9JbWFnZUFzc2V0cy9ibG9iL21hc3Rlci93ZWxjb21lLTEucG5nP3Jhdz10cnVlIn19LHsiaW1hZ2UiOnsidXJsIjoiaHR0cHM6Ly9naXRodWIuY29tL0JLMTAzMS9JbWFnZUFzc2V0cy9ibG9iL21hc3Rlci93ZWxjb21lLTIucG5nP3Jhdz10cnVlIn19LHsiZGVzY3JpcHRpb24iOiJPcmlnaW5hbGx5IGEgcGxheWdyb3VuZCBzZXJ2ZXIgZm9yIGJvdCB0ZXN0aW5nIGFuZCBjb2RlIGRpc2N1c3Npb24sIHdlIGhhdmUgc2luY2UgZXhwYW5kZWQgd2l0aCBjaGFubmVscyBmb3IgYWxtb3N0IGV2ZXJ5dGhpbmcgaW1hZ2luYWJsZS4gRG9uJ3QgZm9yZ2V0IHRvIGNoZWNrIG91dCBvdXIgPCM3MDg5NDI5OTU5MzU4NTQ2NTM-LiBXZSBob3BlIHlvdSBlbmpveSB5b3VyIHN0YXkhIn0seyJ0aXRsZSI6IkltcG9ydGFudCBMaW5rcyIsImRlc2NyaXB0aW9uIjoiRm9sbG93IG1lIG9yIHNvbWV0aGluZy4iLCJmaWVsZHMiOlt7Im5hbWUiOiJEaXNjb3JkIEludml0ZSIsInZhbHVlIjoiaHR0cHM6Ly9kaXNjb3JkLmJrMTAzMS5kZXYiLCJpbmxpbmUiOnRydWV9LHsibmFtZSI6IkdJdEh1YiIsInZhbHVlIjoiaHR0cHM6Ly9naXRodWIuY29tL2JrMTAzMSIsImlubGluZSI6dHJ1ZX0seyJuYW1lIjoiTGlua2VkSW4iLCJ2YWx1ZSI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9iazEwMzEvIiwiaW5saW5lIjp0cnVlfSx7Im5hbWUiOiJJbnN0YWdyYW0iLCJ2YWx1ZSI6Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmsxMDMxX29mZmljaWFsLyIsImlubGluZSI6dHJ1ZX0seyJuYW1lIjoiVHdpdHRlciIsInZhbHVlIjoiaHR0cHM6Ly90d2l0dGVyLmNvbS9iazEwMzFfb2ZmaWNpYWwiLCJpbmxpbmUiOnRydWV9LHsibmFtZSI6IllvdVR1YmUiLCJ2YWx1ZSI6Imh0dHBzOi8veW91dHViZS5iazEwMzEuZGV2IiwiaW5saW5lIjp0cnVlfV19LHsiZm9vdGVyIjp7InRleHQiOiJQUzogQW5ndWxhciBzdWNrcyJ9fV19fQ
		message.channel.send(new Discord.RichEmbed()
			.setColor('#0099ff')
            .setImage("https://github.com/BK1031/ImageAssets/blob/master/welcome-2.png?raw=true")
        );
        message.channel.send(new Discord.RichEmbed()
            .setColor('#0099ff')
            .setDescription("Originally a playground server for bot testing and code discussion, we have since expanded with channels for almost everything imaginable. Don't forget to check out our <#708942995935854653>. We hope you enjoy your stay!")
        );
        message.channel.send(new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle("Important Links")
            .setDescription("Follow me or something.")
            .addField("Discord Invite", "https://discord.bk1031.dev", true)
            .addField("GitHub", "https://github.com/bk1031", true)
            .addField("LinkedIn", "https://www.linkedin.com/in/bk1031/", true)
            .addField("Instagram", "https://www.instagram.com/bk1031_official/", true)
            .addField("Twitter", "https://twitter.com/bk1031_official", true)
            .addField("YouTube", "https://youtube.bk1031.dev/", true)
        );
        message.channel.send(new Discord.RichEmbed()
            .setFooter("PS: Angular sucks")
        );
	},
};