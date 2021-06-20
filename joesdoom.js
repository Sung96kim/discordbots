require('dotenv').config();
const Discord = require('discord.js');
const { userInfo } = require('os');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.once("ready", () => {
  console.log("Ready!");
});

bot.once("reconnecting", () => {
  console.log("Reconnecting!");
});

bot.once("disconnect", () => {
  console.log("Disconnect!");
});

bot.on("message", async message => {
  const channel = message.channel;

  if (message.author.bot) return;

  // if (message.content.includes("Sung is gay, indeed") || message.content.includes("Sung") || message.content.includes("sung")){
  //   channel.send(
  //     "**If Joe keeps this up, I'm going to destroy him. Watch yourself Joe.**", {files: ["https://cdn.discordapp.com/attachments/855126450377981972/855466732604358756/slap.png"]}
  //   );
  // }

  if (message.content === "!help"){
    channel.send(
      "What do you want loser, go away"
    );
  }

  if (message.content === "!plshelpme"){
    channel.send(
      "Okay fine. Here's the list of commands: ", "You can ping everyone in the server by just normally typing: 'ping carrie' | 'ping joe' | 'ping jn' | 'ping gil' | 'ping boyun' | 'ping ooby' | 'ping sung' "
    );
  }

  // if (message.content.includes("boyun") || message.content.includes("Boyun") || message.content.includes("Hoyun") || message.content.includes("hoyun")){
  //   channel.send(
  //     "Did someone mention mr.tinydick? 8)", {files: ["https://i.imgur.com/bv5y7hW.png"]}
  //   );
  // }
  
  // if (message.content.includes("ooby") || message.content.includes("umbry") || message.content.includes("Umbry") || message.content.includes("Ooby")){
  //   channel.send(
  //     "Ooby's a lil bich. I'm a bot so I would know. Also he's a fking ditcher"
  //   );
  // }

  // if (message.content.includes("joe") || message.content.includes("Joe") || message.content.includes("joes") || message.content.includes("Joes" ) || message.content.includes("joe's") || message.content.includes("Joe's")){
  //   channel.send(
  //     "**joes a bich. oh and he's also gay**", {files: ["https://cdn.discordapp.com/attachments/855126450377981972/855466732604358756/slap.png"]}
  //   );
  // }

  //ping statements
  if(message.content === "ping joe"){
    channel.send(
      `bich someone wants you <@710137918638784533>`
    );
  }
  if(message.content === "ping gil"){
    channel.send(
      `bich someone wants you <@120733242180632577>`
    );
  }
  if(message.content === "ping jn"){
    channel.send(
      `bich someone wants you <@454213795774988299>`
    );
  }
  if(message.content === "ping sung"){
    channel.send(
      `bich someone wants you <@124697759377784832>`
    );
  }
  if(message.content === "ping ooby"){
    channel.send(
      `bich someone wants you <@120623454931255299>`
    );
  }
  if(message.content === "ping carroe"){
    channel.send(
      `bich someone wants you <@118857191661764608>`
    );
  }
  if(message.content === "ping boyun"){
    channel.send(
      `bich someone wants you <@383502546263867394>`
    );
  }

  //Make counter for how many times an emoji is used
  if(message.content.includes()){

  }

  //React to every message Joe sends
  if(message.author.id === '124697759377784832'){
    message.react('848061721297027093');
  }


});

bot.login(TOKEN);