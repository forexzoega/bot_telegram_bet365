import express from 'express';
import myBot from './bet365-dados-2.js';
const server = express()

import cors from 'cors';

server.use(
  cors({
    credentials: true,
    origin: true
  })
);

server.options('*', cors);

server.get('/', (req, res) => {
  res.send('bot is working');

});

server.listen(process.env.PORT || 8081, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
  //setInterval(()=>{
  myBot.callAll();
  // }, 10000)
})