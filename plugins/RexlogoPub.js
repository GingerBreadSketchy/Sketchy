const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ð¼"

if (Config.WORKTYPE == 'public') {
   
   
   Trex.applyCMD({ pattern: 'rlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââ ð¼*SKETCHY LOGO PACK 1*ð¼ â
â ââââââââââââââââââââââ
â
â   `+Config.CAPTION+`
â
â ââ¢ ð¼Cmd: *.phub*
â âââ¢ ð Dec: *Send pornhub logo*
â ââ¢ ð¼ Ex: *.phub Sketchy/Ginger*
â
â ââ¢ ð¼ Cmd: *.stone*
â âââ¢ ð Dec: *Send stone like logo*
â ââ¢ ð¼Ex: *.stone Sketchy/Ginger*
â
â ââ¢ ð¼Cmd: *.glitch*
â âââ¢ ð Dec: *Send glitch logo*
â ââ¢ ð¼ Ex: *.glitch Sketchy/Ginger*
â
â ââ¢ ð¼Cmd: *.space*
â âââ¢ ð Dec: *Send space logo*
â ââ¢ ð¼Ex: *.space Sketchy/Ginger*
â
â ââ¢ ð¼Cmd: *.blood*
â âââ¢ ð Dec: *Send blood hor logo*
â ââ¢ ð¼Ex: *.blood Sketchy*
â
â ââ¢ ð¼Cmd: *.blackpink*
â âââ¢ ð Dec: *Send bpink logo*
â ââ¢ ð¼Ex: *.blackpink Sketchy*
â
â ââ¢ ð¼Cmd: *.wall*
â âââ¢ ð Dec: *Send wall art logo*
â ââ¢ ð¼Ex: *.wall Sketchy*
â
â ââ¢ ð¼Cmd: *.coding*
â âââ¢ð Dec: *Send coding logo*
â ââ¢ ð¼ Ex: *.coding Sketchy*
â
â ââ¢ ð¼Cmd: .*.sand1*
â âââ¢ ð  Dec: *Send sand writting*
â ââ¢ ð¼ Ex: *.sand1 Sketchy*
â
â ââ¢ ð¼Cmd: *.sand2*
â âââ¢ ð Dec: *Send sand writting*
â ââ¢ ð¼Ex: *.sand2 T-REX
â
â ââ¢ ð¼Cmd: *.sand3*
â âââ¢ ð Dec: *Send sand writting*
â ââ¢ ð¼Ex: *.sand3 T-REX
â
â ââ¢ ð¼Cmd: *.beach*
â âââ¢ ð Dec: *Send beach logo*
â ââ¢ ð¼Ex: *.beach T-REX
â
â ââ¢ ð¼Cmd: *.gradient*
â âââ¢ ð  Dec: *Send logo*
â ââ¢ ð¼ Ex: *.gradient Sketchy*
â
â ââ¢ ð¼Cmd: *.luxury*
â âââ¢ ð  Dec: *Send luxury logo*
â ââ¢ ð¼ Ex: *.luxury Sketchy*
â
â ââ¢ ð¼Cmd: *.sky*
â âââ¢ ð  Dec: *Send sky logo*
â ââ¢ ð¼ Ex: *.sky Sketchy*
â
â ââ¢ ð¼Cmd: *.winter*
â âââ¢ ð  Dec: *Send winter logo*
â ââ¢ ð¼ Ex: *.winter T-REX
â
â ââ¢ ð¼Cmd: *.christmas*
â âââ¢ ð  Dec: *Send xmas logo*
â ââ¢ ð¼ Ex: *.christmas Sketchy*
â
â ââ¢ ð¼Cmd: *.neon*
â âââ¢ ð  Dec: *Send neon logo*
â ââ¢ ð¼ Ex: *.neon Sketchy*
â
â ââ¢ ð¼Cmd: *.king*
â âââ¢ ð  Dec: *Send king logo*
â ââ¢ ð¼ Ex: *.king Sketchy*
â
â ââ¢ ð¼Cmd: *.glue*
â âââ¢ ð  Dec: *Send Glue logo*
â ââ¢ ð¼ Ex: *.glue Sketchy*
â
â      ââ ð¼SKETCHY BOT ð¼ââ
â        â ENJOY WITH US â
âââââââââââââââââââââââ`,quoted: message.data})

    }));

   Trex.applyCMD({pattern: 'gamma ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://api.lolhuman.xyz/api/meme8?apikey=d3be4b65ca9dab633c773d66&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â±  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'stone ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/stone-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â±  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'glitch ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/glitch-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â±  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'space ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/space-3d?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â±  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'phub ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/phub?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â±  ',quoted: message.data})
   
   }));
   
   
     Trex.applyCMD({ pattern: 'blood ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'blackpink ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'coding ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'wall ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'sand1 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'beach ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'gradient ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'luxury ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'sky ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'winter ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'christmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})
    }));
      
     Trex.applyCMD({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'king ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
      Trex.applyCMD({ pattern: 'sand2 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'sand3 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ',quoted: message.data})

    }));
      
      
      Trex.applyCMD({ pattern: 'glue ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ð¼ð§­Sketchyð§­ð¼â± ' ,quoted: message.data})

    }));
      
      
      
      
   
}
