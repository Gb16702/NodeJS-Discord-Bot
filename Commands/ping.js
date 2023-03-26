const getCurrentFilename = require("../utils/getCurrentFilename")

module.exports = {
    name : "ping",
    run(bot, message) {
        try {
            message.reply(`Ping : \`${bot.ws.ping}\``)
        }
        catch(err) {
            message.reply(`Erreur lors de l'exécution de la commande ${getCurrentFilename()}`)
        }
    }
}