let { webp2png } = require('../lib/webp2mp4')

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `Balas gambar dengan perintah *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `Balas gambar dengan perintah *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', '© Naruto By Rafi Ser', m, false, { thumbnail: out })
}
handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = ['toimg']

module.exports = handler
