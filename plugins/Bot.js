/*const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'bot', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　
¸︵︵( ░░ )︵.︵.︵
(´░░░░░░ ') ░░░' )
`´︶´¯`︶´`︶︶
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪


🍁 *Developer - Hirusha Rushan ( Hiruwa )*

🍁 *Language - NODE JS*

🍁 *Base Bot Owner - Black Amda*

🍁 *Sponser Team - PEARL Team*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯

       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Kasun Ravihara* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Black Amda* 
➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🍒 *Achiya* 🍒
➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*

🍒 *Seneth Indeepa*
➻ *ʙᴏᴛ ᴛʀᴀɪʟᴇʀ ɪɴᴛʀᴏ ᴍᴀᴋᴇʀ*

 .       _
       / 7    🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒
      /_(     🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒
      |_|      🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒
      |_|       
      |_|
      |_|  /\
 /\..|=|/  /   
 \    |_|  /  🍁 *𝚃𝙴𝚇𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 - ᴛʜᴀɴᴜᴊ* 🍁
   )   _   \
  /   |_|    \
/    -=-o  /
\    /~ \ _/
  \/
           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Thanuj Fernando* ╹
╹ 🔰 *Acintha Fernando*╹
╹ 🔰 *Kasun Ravihara*    ╹

 ♥ *ʏᴛ ʟɪɴᴋ - https://youtu.be/oaSPHc78LNQ*


    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰"})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'bot', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
¸︵︵( ░░ )︵.︵.︵
(´░░░░░░ ') ░░░' )
`´︶´¯`︶´`︶´︶´`　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪


🍁 *Developer - Hirusha Rushan ( Hiruwa )*

🍁 *Language - NODE JS*

🍁 *Base Bot Owner - Black Amda*

🍁 *Sponser Team - PEARL Team*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯

       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Kasun Ravihara* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Black Amda* 
➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🍒 *Achiya* 🍒
➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*

🍒 *Seneth Indeepa*
➻ *ʙᴏᴛ ᴛʀᴀɪʟᴇʀ ɪɴᴛʀᴏ ᴍᴀᴋᴇʀ*

 .       _
       / 7    🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒
      /_(     🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒
      |_|      🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒
      |_|       
      |_|
      |_|  /\
 /\..|=|/  /   
 \    |_|  /  🍁 *𝚃𝙴𝚇𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 - ᴛʜᴀɴᴜᴊ* 🍁
   )   _   \
  /   |_|    \
/    -=-o  /
\    /~ \ _/
  \/
           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Thanuj Fernando* ╹
╹ 🔰 *Acintha Fernando*╹
╹ 🔰 *Kasun Ravihara*    ╹

 ♥ *ʏᴛ ʟɪɴᴋ - https://youtu.be/oaSPHc78LNQ*


    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰  ` })

    }));
  
  Amdi.applyCMD({pattern: 'bot', fromMe: false,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
¸︵︵( ░░ )︵.︵.︵
(´░░░░░░ ') ░░░' )
`´︶´¯`︶´`︶´︶´`　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪


🍁 *Developer - Hirusha Rushan ( Hiruwa )*

🍁 *Language - NODE JS*

🍁 *Base Bot Owner - Black Amda*

🍁 *Sponser Team - PEARL Team*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯

       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Kasun Ravihara* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Black Amda* 
➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🍒 *Achiya* 🍒
➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*

🍒 *Seneth Indeepa*
➻ *ʙᴏᴛ ᴛʀᴀɪʟᴇʀ ɪɴᴛʀᴏ ᴍᴀᴋᴇʀ*

 .       _
       / 7    🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒
      /_(     🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒
      |_|      🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒
      |_|       
      |_|
      |_|  /\
 /\..|=|/  /   
 \    |_|  /  🍁 *𝚃𝙴𝚇𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 - ᴛʜᴀɴᴜᴊ* 🍁
   )   _   \
  /   |_|    \
/    -=-o  /
\    /~ \ _/
  \/
           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Thanuj Fernando* ╹
╹ 🔰 *Acintha Fernando*╹
╹ 🔰 *Kasun Ravihara*    ╹

 ♥ *ʏᴛ ʟɪɴᴋ - https://youtu.be/oaSPHc78LNQ*


    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰`  ,quoted: message.data})

    }));
}*/