let fs = require('fs')

let jsonExport = {
    readJson : function(fileName){
        return JSON.parse(fs.readFileSync(fileName, {encoding: 'utf-8'}))
    },

    rewriteJson : function (fileName, data){
        fs.writeFileSync(fileName, JSON.stringify(data))
    },
}

module.exports = jsonExport