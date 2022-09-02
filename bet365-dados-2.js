import { webkit } from 'playwright-webkit';
import Xvfb from 'xvfb';
import { jogosNaoEmpatados, muitosGols } from './estrategia.js';
import { botStrategy, chat_adss } from './botTelegram.js';


const timerLigas = 2000;
const timerTempoJogos= 1500;

async function callAll() {
  console.log('funcionou');

 // setInterval(() => {

    (async () => {
      var xvfb = new Xvfb({
        silent: true,
        xvfb_args: ["-screen", "0", '1280x720x24', "-ac"],
    });
    xvfb.start((err)=>{if (err) console.error(err)})

      const browser = await webkit.launch({
        headless: true,
      //  args: ['--no-sandbox', '--start-fullscreen', '--display='+xvfb._display]
        //args: ['--display='+xvfb._display]
      });  //{headless: false}
        const page = await browser.newPage();
        await page.goto('http://game-365.com/#/AVR/B146/R%5E1/');

        await page.waitForLoadState('networkidle');

        const context = await browser.newContext();

  
        await page.locator('text=Aceitar').click();
        await page.waitForLoadState('networkidle');
        
        await percorrendoTemposLigas();
        async function percorrendoTemposLigas(){

          // Click text=Euro Cup
          await page.locator('text=Euro Cup').click({delay:101}); 
          await percorrerTempo();
          await page.waitForLoadState('networkidle');
           
  
          // Click text=Campeonato do Mundo
          await page.waitForTimeout(timerLigas)
          await page.locator('text=Campeonato do Mundo').click({delay:101});
          await percorrerTempo()
          await page.waitForLoadState('networkidle');
  
  
          // Click text=Premiership
          await page.waitForTimeout(timerLigas)
          await page.locator('text=Premiership').click({delay:101});
          await percorrerTempo()
          await page.waitForLoadState('networkidle');
  
  
          // Click text=Superliga
          await page.waitForTimeout(timerLigas)
          await page.locator('text=Superliga').click({delay:101});
          await percorrerTempo()
          await page.waitForLoadState('networkidle');
        }

        
         async function percorrerTempo(){
                const contador =  await page.locator('.vr-EventTimesNavBarButton').count()
                if(contador == undefined || contador == 0){
 
                   await page.waitForLoadState('networkidle');

                }else{
                    try {
                         for (let index = 0; index < contador; index++) {                        
                                                 await page.locator('.vr-EventTimesNavBarButton').nth(index).click({delay:400});
                                                 await page.waitForTimeout(timerTempoJogos)
                                                 await verificarParaTimeMarcarSimNao()
                                                 await page.waitForTimeout(timerTempoJogos)
                                                 //await page.waitForLoadState('networkidle');
                          }
                    } catch (error) {
                        console.log('exceçao-timer')
                        await percorrerTempo()
                    }
                  let liga = await page.locator('.vrl-MeetingsHeaderButton.vrl-MeetingsHeaderButton-selected').textContent()
                  if(liga == 'Superliga'){
                    // recomeçar
                    await percorrendoTemposLigas()
                  }
                }
            return
        }

        async function verificarParaTimeMarcarSimNao(){
                let liga = await page.locator('.vrl-MeetingsHeaderButton.vrl-MeetingsHeaderButton-selected').textContent()
                let time = await page.locator('.vr-EventTimesNavBarButton.vr-EventTimesNavBarButton-selected').textContent()
                let odd = await page.locator('div:nth-child(19) > div.gl-MarketGroup_Wrapper > div > div:nth-child(2) > div:nth-child(4)').textContent()
                 let msgBot = '⚽ '+' ' + liga +'  ' +time + ' => '+ odd + ' ✅'
                 await botStrategy(msgBot)
               // console.log(msgBot)
            
            return 
       
        }   
   



      await context.close();
      await browser.close();
       xvfb.stop();
    })();

//}, 3000);



}

export default { callAll }