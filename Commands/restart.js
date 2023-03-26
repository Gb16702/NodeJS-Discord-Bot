const {getCurrentFilename} = require('../utils/getCurrentFilename')

module.exports = {
    name : 'restart',
    description : 'Permet de redémarrer le bot',
    async execute(message, args) {
        if(!message.member) {
            return message.reply("Vous n'avez pas la permission d'utiliser cette commande")
        }
        try {
            await message.channel.send('Redémarrage du bot...')
            message.client.destroy()
            message.client.login(process.env.DISCORD_TOKEN)
        }
        catch(error) {
            console.log(error);
            message.reply(`Une erreur s'est produite lors de l'exécution de la commande ${getCurrentFilename()}`)
        }
    }
}