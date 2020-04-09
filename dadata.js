const DaData = require('dadata-suggestions');

var token = '';

const dadata = new DaData(token);

module.exports.getParty = (message, callback) => {
    dadata.party({ query: message, count: 5 })
    .then((data) => {
        callback(data.suggestions);
    })
}