const {Client, Collection} = require('discord.js')
const loadCommands = require('./Handlers/loadCommands')
require('./utils/getCurrentFilename')
require('dotenv').config()

const client = new Client({intents : 3276799})

client.commands = new Collection()
console.log(client);

client.login(process.env.DISCORD_TOKEN)
.then(() => {
    console.log(`${client?.user.tag} est connecté`)
    loadCommands(client)
}).catch(error => console.warn(`Erreur lors de la connexion : ${error}`))

client.on('messageCreate', message => {
    switch(message.content) {
        case 'ping' :
            client.commands.get('ping').run(client, message)
        break

        case 'hello' :
            message.reply(`Bonjour, ${message.author.username}`)
        break

        case 'restart' :
            client.commands.get('restart').execute(message)
        break

        case 'stop' :
            client.commands.get('stop').execute(message)
    }
})

