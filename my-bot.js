/* Ashley "Red Alchemist" Faul
6/ 16/ 2019 
The creation of my first successful version of Sai
He will remain here as a discord bot until I am able to further
him along.  Sai will receive constant improvements as I broaden my
knowledge*/

const Discord = require('discord.js') //setup for the discord bot
const client = new Discord.Client() //same

client.on('ready', () => { //welcome to the world Sai

    console.log("Connected as " + client.user.tag) //Shows Sai's tag
    client.user.setActivity("Team Fortress 2") //this makes it appear that Sai is playing whatever game is listed.

    client.guilds.forEach((guild) => { //So basically yea shows everything
        console.log(guild.name) //shows his servers
        guild.channels.forEach((channel) => { //and his channels
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`) //Able to show what Sai is connected to, servers, ect
        })
        //General channel id: 589619229825826864 
    })

    let generalChannel = client.channels.get("589619229825826864") //this connects sai to the general "allys lab" channel
    const attachment = new Discord.Attachment("") //Sai will be able to send whatever image or picture i send here.  I wish
    //for him to do this on his own soon.
    generalChannel.send("") //Whatever is typed here will be sent in the chat as soon as Sai goes online

}) 

//This is the beginning my friends.  Sai is learning how to receive and respond to messages! 
client.on('message', (receivedMessage) => {
    if(receivedMessage.author == client.user){       //This is so Sai doesnt respond to his own messages in an infinite loop.
        return
    }
    receivedMessage.channel.send(receivedMessage.author.toString())  //this responds to the user with their discord tag
//ie "@Red_Alchemist"
    receivedMessage.react("🤠") /* If someone messages in the chat, Sai "reacts" to it with this emoji.  I am hoping to get him
    to react on his own to only certain messages */
    

})

client.login("NTg5NjE5ODAxOTk2MTMyMzUz.XQWZog.Z3lGf3KPVXLXfkrSDOZ02pFTlXg") //This logs sai in to the general channel of "Allys Lab"

/* \\ \\ \\ \\ \\ 
   // // // // //
   \\ \\ \\ \\ \\
   ===============
   [             ]=====
   [     HOT     ]    ||
   [    COFFEE   ]    ||
   [             ]=====
   ==============
   
   YOU HAVE BEEN GIFTED THE LEGENDARY CODE BREW COFFEE
   
   +10 FOCUS
   +8 SPEED
   -1 HUNGER
   +5 HP
   +3 XP

   - RED_ALCHEMIST 
   */