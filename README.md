# Discord Ticket Sistemi Botu (TypeScript - discord.js v14)

- Bu proje, **discord.js v14** kullanarak TypeScript ile yazılmış basit ve fonksiyonel bir Discord ticket sistemi botudur.  
- Slash komut ve buton etkileşimleriyle kullanıcıların destek talepleri için ticket kanalı açıp kapatmalarını sağlar.
- Daha fazla altyapı için [discord sunucumuz'a](https://discord.gg/DRCE9wCn4K) gelerek daha faazla altyapıya erişebilirsiniz

---

## Özellikler

- `/ticket` komutu ile ticket oluşturma paneli gönderme  
- Buton ile yeni ticket kanalı oluşturma  
- Ticket kanalı yalnızca kullanıcı ve destek ekibi tarafından görülebilir  
- Ticket kapatma butonu ile ticket kanalını 5 saniye sonra kapatma  
- Komut, event ve button handler'ları ayrı dosyalarda modüler yapı  
- TypeScript ile tip güvenliği  
- `config.ts` dosyasıyla kolay yapılandırma  

---

## Kurulum

1. projeyi indirin ve editör programında açın.
2. src/config.ts dosyasına girin ve bilgileri doldurun.
3. terminal'i açın ve `npm install` yazın.
4. slash komutlarını `npx ts-node src/utils/deployCommands.ts` şu şekilde sunucuya yükleyin
5. işte bu kadar `npm run dev` veya `ts-node src/index.ts` yazarak projenizi açabilirsiniz.

---

slow3rxq tarafından ❤️ ile yapıldı
