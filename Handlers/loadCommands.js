const fs = require('fs').promises
const path = require('path')

module.exports = bot => {
        const commandsPath = path.join(process.cwd(), 'Commands')
        fs.readdir(commandsPath)
        .then((commandFiles) => {
            const jsFiles = commandFiles.filter(file => file.endsWith('.js'))
            for (const file of jsFiles) {
                const command = require(path.join(commandsPath, file))
                if(!command.name || typeof command.name !== "string") {
                    throw new TypeError(`La commande ${file.slice(0, file.length -3)} n'a pas de nom`)
                }
                bot.commands.set(command.name, command)
                console.log(`${file} chargé avec succès`);
            }
        }).catch(error => console.warn(`Erreur lors du chargement des commandes : ${error}`))
}