
/* DEVELOPER SKETCHY
Don't copy this i take action for you
๐ฟ๐ฟ๐ฟ๐ฟ๐ฟ๐ฟ๐ฟ
T-Rex v.1.0 public ๐ฟ
*/


const Trex = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Africa/Nairobi' })

if (config.WORKTYPE == 'public') {

Trex.applyCMD({pattern: 'sketchy', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 โญโโโโโโโโโโโโโโโโ
 โโฐ๐ผ๐งญSketchy๐งญ๐ผโฑ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฟ `+config.WORKTYPE+` ๐ฟ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ๐ฟ BOT ๐ฟ๐ฐ
 โ        โโโโโโโโโโ
 โ
 โโท .sketchy
 โโท .alive
 โโท .atrex [ advance menu ]
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ Sticker ๐ฟ๐ฐ
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ๐ฟ Text To Img ๐ฟ๐ฐ
 โ
 โโท .rlpack
 โโท .tlpack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ๐ฟ Downloader ๐ฟ๐ฐ
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ Groups ๐ฟ๐ฐ
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change group n}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ๐ฟ ONLINE STORE ๐ฟ๐ฐ
 โ
 โโท .online store
 โ 
 โ ๐ฟ T-REX ONLINE ๐ฟ
 โ     SHOPPING
 โ
 โ ONLY SRI LANKAN 
 โ    VISITORS.
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ๐ฟ For owner ๐ฟ๐ฐ
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      Sketchy Bot
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ๐ฟ Search ๐ฟ๐ฐ
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .mod { app name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ๐ฟ Media Editor๐ฟ๐ฐ
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ๐ฟ Random ๐ฟ๐ฐ
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ๐ฟ Fun ๐ฟ๐ฐ
 โ
 โโท .rex { hi }
 โโท .gm
 โโท .tgm
 โโท .gn
 โโท .tgn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐ฐ๐ฟ Other ๐ฟ๐ฐ
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
         ๐ฟ POWERD BY ๐ฟ
  โฐ๐ผ๐งญSketchy๐งญ๐ผโฑ
  
       ๐ฟ       SKETCHY        ๐ฟ
 
 
`,quoted: message.data}) 

}));

Trex.applyCMD({pattern: 'sketchy', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 โญโโโโโโโโโโโโโโโโ
 โโฐ๐ผ๐งญSketchy๐งญ๐ผโฑ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฟ `+config.WORKTYPE+` ๐ฟ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ๐ฟ BOT ๐ฟ๐ฐ
 โ        โโโโโโโโโโ
 โ
 โโท .sketchy
 โโท .alive
 โโท .atrex [ advance menu ]
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ Sticker ๐ฟ๐ฐ
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ๐ฟ Text To Img ๐ฟ๐ฐ
 โ
 โโท .rlpack
 โโท .tlpack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ๐ฟ Downloader ๐ฟ๐ฐ
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ Groups ๐ฟ๐ฐ
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change grp name}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ๐ฟ ONLINE STORE ๐ฟ๐ฐ
 โ
 โโท .online store
 โ 
 โ ๐ฟ T-REX ONLINE ๐ฟ
 โ     SHOPPING
 โ
 โ ONLY SRI LANKAN 
 โ    VISITORS.
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ๐ฟ For owner ๐ฟ๐ฐ
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      Sketchy Bot
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ๐ฟ Search ๐ฟ๐ฐ
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .mod { app name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ๐ฟ Media Editor๐ฟ๐ฐ
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ๐ฟ Random ๐ฟ๐ฐ
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ๐ฟ Fun ๐ฟ๐ฐ
 โ
 โโท .rex { hi }
 โโท .gm
 โโท .tgm
 โโท .gn
 โโท .tgn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐ฐ๐ฟ Other ๐ฟ๐ฐ
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
         ๐ฟ POWERD BY ๐ฟ
  โฐ๐ผ๐งญSketchy๐งญ๐ผโฑ
  
       ๐ฟ       SKETCHY        ๐ฟ
 
 
`,quoted: message.data}) 

}));
    
}

else if (config.WORKTYPE == 'private' ) {
    
    Trex.applyCMD({pattern: 'sketchy', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]

    var wish = ''
     

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 โญโโโโโโโโโโโโโโโโ
 โโฐ๐ผ๐งญSketchy๐งญ๐ผโฑ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฟ `+config.WORKTYPE+` ๐ฟ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ BOT ๐ฟ๐ฐ
 โ      โโโโโโโโโโ
 โ
 โโท .sketchy
 โโท .alive
 โโท .atrex [ advance menu ]
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ Sticker ๐ฟ๐ฐ
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ๐ฟ Text To Img ๐ฟ๐ฐ
 โ
 โโท .rlpack
 โโท .tlpack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ๐ฟ Downloader ๐ฟ๐ฐ
 โ
 โโท .video { vid link }
 โโท .vid2 { vid link }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ๐ฟ Groups ๐ฟ๐ฐ
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change grp name}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ๐ฟ ONLINE STORE ๐ฟ๐ฐ
 โ
 โโท .online store
 โ 
 โ ๐ฟ T-REX ONLINE ๐ฟ
 โ     SHOPPING
 โ
 โ ONLY SRI LANKAN 
 โ    VISITORS.
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ๐ฟ For owner ๐ฟ๐ฐ
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      Sketchy Bot
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ๐ฟ Search ๐ฟ๐ฐ
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .mod { app name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ๐ฟ Media Editor๐ฟ๐ฐ
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ๐ฟ Random ๐ฟ๐ฐ
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ๐ฟ Fun ๐ฟ๐ฐ
 โ
 โโท .rex { hi }
 โโท .gm
 โโท .tgm
 โโท .gn
 โโท .tgn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐ฐ๐ฟ Other ๐ฟ๐ฐ
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
         ๐ฟ POWERD BY ๐ฟ
  โฐ๐ผ๐งญSketchy๐งญ๐ผโฑ
  
       ๐ฟ       SKETCHY        ๐ฟ
 
 
`,quoted: message.data}) 

}));
}
