const {Client, Collection} = require('discord.js')
const loadCommands = require('./Handlers/loadCommands')
require('dotenv').config()

const bot = new Client({intents : 3276799})

bot.commands = new Collection()

bot.login(process.env.DISCORD_TOKEN)
.then(() => {
    console.log(`${bot.user.tag} est connecté`)
    loadCommands(bot)
}).catch(error => console.warn(`Erreur lors de la connexion : ${error}`))

bot.on('messageCreate', message => {
    if(message.content === 'ping') bot.commands.get('ping').run(bot, message)
})
