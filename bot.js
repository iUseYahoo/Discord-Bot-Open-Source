/*
NOTE: This bot isnt currently being used by me.
This was made to post on Github for people wanting to make discord bots via having the basics of discord bot coding here.
Please do not use this bot and have it run the nitro command 24/7 to get free nitro.
Generating free nitro using random string generators are pretty much impossible.
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const randomstring = require("randomstring");
const usergen = require("username-generator");
const namegen = require("name-generate");
const emails = require('email-generator');
const token = ''; // Add your bot token here.

client.on("ready", () => {
  client.user.setPresence({
    activity: {
      name: 's.help',
      type: "LISTENING"
    },
    status: 'online'
  })

  console.log(`\n\n----------------------`)
  console.log(`Logged in as ${client.user.tag}`)
  console.log(`----------------------\n\n`)
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.ping") {
      msg.reply("Pong");
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.passgen") {
      msg.author.send("**Password**");
      msg.author.send(randomstring.generate(15));
      msg.reply("Password sent to your dms");
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.gmail") {
      msg.author.send(randomstring.generate(20) + "@gmail.com");
      msg.reply("Check your DMs for the random gmail.");
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.help") {
      const newEmbed = new Discord.MessageEmbed()
        .setTitle("Sin Help")
        .addField("s.help", "to see this menu")
        .addField("s.ping", "Pong")
        .addField("s.massnitro", "Generates nitro codes, s.massnitro <amount>")
        .addField("s.passgen", "Generates a random password.")
        .addField("s.gmail", "Generates a random gmail.")
        .addField("s.user", "Generates a random username.")
        .addField("s.emailcombo", "Generates a random email:password.")
        .addField("s.usercombo", "Generates a random username:password.")
        .addField("s.name", "Generates a random firstname:lastname.")
        .addField("s.say", "Bot will repeat what you say, Exmaple: s.say Q is dad.")
        .addField("s.calc", "Bot will do basic math for 2 sets of numbers, Example: s.calc 2 2.")
        .addField("s.ctf", "Bot will convert Celcius to Fahrenheit, Exmaple: s.ctf 20.")
        .addField("s.scams", "Bot will show you the most command scams on discord to watch out for.")
        .addField("s.ms", "Will show your Latancy from client to API.")
        .setFooter(`By Q̶͊̇#6003`)
        .setColor("A30607")
      msg.channel.send(newEmbed)
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.user") {
      msg.author.send(usergen.generateUsername());
      msg.reply("Check your DMs");
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.emailcombo") {
      msg.author.send(
        randomstring.generate(20) + "@gmail.com:" + randomstring.generate(15)
      );
      msg.reply("Check your DMs");
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.usercombo") {
      msg.author.send(
        usergen.generateUsername() + ":" + randomstring.generate(15)
      );
      msg.reply("Check your DMs");
    }
  }
});

client.on("message", msg => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    if (msg.content === "s.name") {
      msg.author.send(namegen.first() + " " + namegen.last());
      msg.reply("Check your DMs");
    }
  }
});

client.on("message", (msg) => {
  if (msg.channel.type === 'dm') {
    return
  } else {
    var marg = msg.content.split(" ")

    if (marg[0] == "s.massnitro") {

      if (marg[1] > 10 || marg[1] == 0) {
        msg.reply("You cannot do " + marg[1] + ". Please use a value from 1 to 10.")
        return
      }
      var results = ""

      for (i = 0; i < marg[1]; i++) {
        if (results.length == 0) {
          msg.author.send("https://discord.gift/" + randomstring.generate(16))
        }
      }
    }
  }
});

client.on('message', function (message) {
  var parts = message.content.split(" ");

  if (parts[0] === "s.say") {
    replyagain(message, parts)
  }
})

function replyagain(message, parts) {
  var search = parts.slice(1).join(" ");
  message.channel.lastMessage.delete();
  message.channel.send(search)
};

client.on('message', msg => {
  var marg = msg.content.split(" ")

  if (marg[0] == 's.del') {
    if (marg[1] > 100 || marg[1] == 0) {
      msg.channel.send(`Usage: ${marg[0]} 1-100`);
      return
    }
    msg.channel.messages.fetch({
      limit: marg[1]
    }).then(msgs => {
      msg.channel.bulkDelete(msgs);
    })
  }
});

client.on('message', msg => {
  var marg = msg.content.split(" ")

  if (marg[0] == 's.calc') {
    msg.channel.send(`Addition: ${parseInt(marg[1]) + parseInt(marg[2])}`)
    msg.channel.send(`Multiplication: ${marg[1] * marg[2]}`)
    msg.channel.send(`Division: ${marg[1] / marg[2]}`)
    msg.channel.send(`Subtraction: ${marg[1] - marg[2]}`)
  }
})

client.on('message', msg => {
  var marg = msg.content.split(" ")

  if (marg[0] == 's.ctf') {
    var ctf = marg[1] / 5 * 9 + 32
    msg.channel.send(`Celcius: ${marg[1]}`)
    msg.channel.send(`Fahrenheit: ${ctf}`)
  }
})

client.on('message', msg => {
  if (msg.content == 's.scams') {
    const newEmbed = new Discord.MessageEmbed()
      .setTitle("Sin Help")
      .setDescription("Pretty much all shop websites people are claiming to sell legit stuff on are fake 90%.. sorry I mean 99% of the time are fake.")
      .addField("Methods", '90% of all methods people sell are easily found on google, enter to google: site:pastebin.com methods')
      .addField("Money Making", 'If it was real why sell the "method" to make money if you have a method making guide.')
      .addField("Programs", 'Most programs they sell you are fake and can be found on github.com that they sell.')
      .addField("Scripts", 'Most scripts they will sell you are from github, aka a "DDoS Sript" which is actually just a DoS script and will not lag a server at all.')
      .addField("Github", 'Github itself isn\'t a scam, Github you can find all types of scripts for you, to helping your computers get rid of bloatware to nasty hacking scripts.')
      .addField("End", 'If someone is going to sell you something google the product and site names, Example: keylogger github, keylogger pastebin.')
      .setFooter(`By Q̶͊̇#6003`)
      .setColor("A30607");
    msg.channel.send(newEmbed);
  }
})

client.on('message', msg => {
  var marg = msg.content.split(" ")

  if (marg[0] == 's.channelname') {
    msg.channel.setName(marg[1]);
    msg.channel.send(`Channel name was set to ${marg[1]}`);
  }
});

client.on('message', msg => {
  var marg = msg.content.split(" ")

  if (marg[0] == 's.vlevel') {
    msg.guild.setVerificationLevel(parseInt(marg[1]));
    msg.channel.send(`${msg.author.username} set verification level to: ${marg[1]}`);
  }
});

client.on('message', msg => {
  if (msg.content === 's.ms') {
    msg.channel.send(`Latency is ${msg.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

client.login(token);