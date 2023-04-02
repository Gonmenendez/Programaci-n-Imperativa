let fs = require('fs')

let exportJson = {
    readJson : function(fileName){
        return JSON.parse(fs.readFileSync(fileName, {encoding : 'utf-8'}))
    },
    writeJson : function(fileName, data){
        fs.writeFileSync(fileName, JSON.stringify(data))
    },
}

module.exports = exportJson