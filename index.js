const VkBot = require('node-vk-bot-api')
const dadata = require('./dadata');
var token = '';

const bot = new VkBot(token)
 
bot.on((ctx) => {
    var message = ctx.message.body;
    
    if(message != '') {
        dadata.getParty(message, data => {
            if(data.length > 0) {
                var replyMessage = 'Найдены следующие организации: \n\n';
                for(var i=0; i<data.length; i++) {
                    replyMessage += (i + 1) + '. ' + data[i].value + '\n';
                    replyMessage += 'ИНН: ' + data[i].data.inn + '\n';
                    replyMessage += 'ОГРН: ' + data[i].data.ogrn + '\n';
                    replyMessage += 'КПП: ' + data[i].data.kpp + '\n';
                    replyMessage += 'Адрес: ' + data[i].data.address.value + '\n\n';
                }
                ctx.reply(replyMessage);
                console.log(data[i].data.address);
            }  else {
                ctx.reply('Организации не найдены')
            }
        })
    }

})
 
bot.startPolling()