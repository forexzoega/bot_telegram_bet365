import { Telegraf, Telegram } from 'telegraf';

const BOT_TOKEN = '5505131378:AAElCnqNkpmSkweOiLgqAwM4cqE_t3UjGWI'

const bot = new Telegraf(BOT_TOKEN)

const id_grupo_strategy = -1423677936

 bot.hears('bot', (ctx) => ctx.reply('Estou aqui de olho...'));
 bot.launch();

async function chat_adss(_msg){
    let msg = _msg

    bot.telegram.sendMessage(id_anderson,msg)

}

async function botStrategy(_botMsg){ 

    let msg  = _botMsg+('👍')   

    const msg = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`

    bot.on('sticker', (ctx) => ctx.reply('⚽️🚨⚽️🚨⚽️🚨⚽️'))

    bot.telegram.sendMessage(id_grupo_strategy,msg);

};

 async function botDate(){
    bot.telegram.sendMessage(id_grupo_strategy, new Date().toString());
}

 async function botLine(){
    bot.telegram.sendMessage(id_grupo_strategy, ' ############## ');
}


export { botStrategy,botDate, botLine, chat_adss }


// # Formatando para envio no telegram
 headers = [' 📡 Novo Evento ⚽⏳                               ']

 data = [
     ['⏰ '+ text_horario_jogo],
     ['✅ ' + text_time1 + " " + text_odd1],
     ['⛔ '+ text_empate+ " " + text_odd_empate],
     ['✅ ' + text_time2 + " " + text_odd2],
     ['⏳ '  + 'Encerrará em ' + tempo],
     ['🌐 '   +  "http://game-365.com/#/AVR/B146/R%5E1/"],
 ]

 table = columnar(data, headers, no_borders=True)

 // # Enviando mensagem para o Telegram
 bot.send_message(canal,table)



 @bot.message_handler(commands=["start"])
 def start(message):
     bot.send_chat_action(message.chat.id, 'typing')
     bot.send_message(message.chat.id, '🤖 Robô iniciado 📊✅')
     bot.send_message(canal, '🤖 Robô iniciado 📊✅')
     bot.send_message(canal, '🤖 Capturando Eventos 📡⚽')
    
     crawler(message)
    
    
 @bot.message_handler(commands=["pause"])
 def pause(message)do {
	:
} while (do {
	condition
} while (condition););
     bot.send_chat_action(message.chat.id, 'typing')
     bot.send_message(message.chat.id, '🤖 Robô parado 📊❌')
     #bot.send_message(canal, '🤖 Robô parado 📊❌')
     restart_program()
