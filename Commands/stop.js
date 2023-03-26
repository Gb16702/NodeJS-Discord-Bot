const {getCurrentFilename} = require('../utils/getCurrentFilename')

module.exports = {
    name: 'stop',
    description : 'Permet de redémarrer le bot',
    async execute(message) {
        try {
            await message.channel.send('Arrêt du bot...')
            process.exit()
        }
        catch(err) {
            message.reply(`Une erreur est survenue lors de l'exécution de la commande ${getCurrentFilename()}`)
        }
    }
}