const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `β°πΌπ§­SketchyWhatsapp Bot Keπ§­πΌβ±
Use *.sketchy* to start  this Bot
ββββ¦βββ¦βββββββββ
βββββββ£βββββ―β°βββ
βββββββ£ββ£ββ£β°β―ββ β£
ββββ©βββ©ββ©ββ©βββββ
  π₯ΆAM ALIVE FAMπ₯Ά
π *Developer* Ι’ΙͺΙ΄Ι’α΄Κ κ±α΄α΄α΄α΄ΚΚ
π *Language*  - NODE JS

     π’ *πππππππ ππππππ* π’

π§­ *Dark-Knight-Hiruwa* π§­
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π§­ *Hiruwa-T-Rex* 
β» *Κα΄α΄ Κα΄κ±α΄ α΄α΄‘Ι΄α΄Κ* 

π§­ *Shadowalker* π§­
β» *Κα΄α΄ α΄α΄κ±α΄ Κα΄Κα΄α΄α΄Κ*       
         π§­ *πππ±ππ²ππΈπ±π΄* π§­
         π§­ *π»πΈπΊπ΄ ππ* π§­
         π§­ *π²πΎπΌπΌπ΄π½π ππ* π§­           
         
 ππ»πΌππ»πΌππ»πΌππ»πΌππ»πΌ
 π *π²ππ΄π°ππ΄π -Ι’ΙͺΙ΄Ι’α΄ΚΚΚα΄α΄α΄κ±α΄α΄α΄α΄ΚΚ* π
           π§­ *α΄α΄α΄ΙͺΙ΄κ±* β’π§­
βΉ π *SidohSprywire* βΉ
βΉ π *GeekBram*βΉ
βΉ π *Escky*    βΉ

 β₯  ΚΙͺΙ΄α΄ - https://giveit.link/gingerbreadsketchy
  π *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π
π *Telegram*  ππΌ t.me/gingerbreadsketchy
π *Whatsapp Me* ππΌ  wa.me/+254792893310
 π°πͺKENYA SINHALA WHATSAPP USER BOTπ°πͺ`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `β°πΌπ§­SketchyWhatsapp Bot Keπ§­πΌβ±
Use *.sketchy* to start  this Bot
ββββ¦βββ¦βββββββββ
βββββββ£βββββ―β°βββ
βββββββ£ββ£ββ£β°β―ββ β£
ββββ©βββ©ββ©ββ©βββββ
  π₯ΆAM ALIVE FAMπ₯Ά
π *Developer* Ι’ΙͺΙ΄Ι’α΄Κ κ±α΄α΄α΄α΄ΚΚ
π *Language*  - NODE JS

     π’ *πππππππ ππππππ* π’

π§­ *Dark-Knight-Hiruwa* π§­
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π§­ *Hiruwa-T-Rex* 
β» *Κα΄α΄ Κα΄κ±α΄ α΄α΄‘Ι΄α΄Κ* 

π§­ *Shadowalker* π§­
β» *Κα΄α΄ α΄α΄κ±α΄ Κα΄Κα΄α΄α΄Κ*       
         π§­ *πππ±ππ²ππΈπ±π΄* π§­
         π§­ *π»πΈπΊπ΄ ππ* π§­
         π§­ *π²πΎπΌπΌπ΄π½π ππ* π§­           
         
 ππ»πΌππ»πΌππ»πΌππ»πΌππ»πΌ
 π *π²ππ΄π°ππ΄π -Ι’ΙͺΙ΄Ι’α΄ΚΚΚα΄α΄α΄κ±α΄α΄α΄α΄ΚΚ* π
           π§­ *α΄α΄α΄ΙͺΙ΄κ±* β’π§­
βΉ π *SidohSprywire* βΉ
βΉ π *GeekBram*βΉ
βΉ π *Escky*    βΉ

 β₯  ΚΙͺΙ΄α΄ - https://giveit.link/gingerbreadsketchy
  π *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π
π *Telegram*  ππΌ t.me/gingerbreadsketchy
π *Whatsapp Me* ππΌ  wa.me/+254792893310
 π°πͺKENYA SINHALA WHATSAPP USER BOTπ°πͺ` })

    }));
  
  Amdi.applyCMD({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `β°πΌπ§­SketchyWhatsapp Bot Keπ§­πΌβ±
Use *.sketchy* to start  this Bot
ββββ¦βββ¦βββββββββ
βββββββ£βββββ―β°βββ
βββββββ£ββ£ββ£β°β―ββ β£
ββββ©βββ©ββ©ββ©βββββ
  π₯ΆAM ALIVE FAMπ₯Ά
π *Developer* Ι’ΙͺΙ΄Ι’α΄Κ κ±α΄α΄α΄α΄ΚΚ
π *Language*  - NODE JS

     π’ *πππππππ ππππππ* π’

π§­ *Dark-Knight-Hiruwa* π§­
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π§­ *Hiruwa-T-Rex* 
β» *Κα΄α΄ Κα΄κ±α΄ α΄α΄‘Ι΄α΄Κ* 

π§­ *Shadowalker* π§­
β» *Κα΄α΄ α΄α΄κ±α΄ Κα΄Κα΄α΄α΄Κ*       
         π§­ *πππ±ππ²ππΈπ±π΄* π§­
         π§­ *π»πΈπΊπ΄ ππ* π§­
         π§­ *π²πΎπΌπΌπ΄π½π ππ* π§­           
         
 ππ»πΌππ»πΌππ»πΌππ»πΌππ»πΌ
 π *π²ππ΄π°ππ΄π -Ι’ΙͺΙ΄Ι’α΄ΚΚΚα΄α΄α΄κ±α΄α΄α΄α΄ΚΚ* π
           π§­ *α΄α΄α΄ΙͺΙ΄κ±* β’π§­
βΉ π *SidohSprywire* βΉ
βΉ π *GeekBram*βΉ
βΉ π *Escky*    βΉ

 β₯  ΚΙͺΙ΄α΄ - https://giveit.link/gingerbreadsketchy
  π *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π
π *Telegram*  ππΌ t.me/gingerbreadsketchy
π *Whatsapp Me* ππΌ  wa.me/+254792893310
 π°πͺKENYA SINHALA WHATSAPP USER BOTπ°πͺ `  ,quoted: message.data})

    }));
}
