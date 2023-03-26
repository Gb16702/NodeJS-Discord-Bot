const path = require('path')

function getCurrentFilename() {
    const fileName = path.basename(__filename).split('.').pop()
    return fileName
}

module.exports = getCurrentFilename