//discord.js v12 

//Dosyanın üst tarafı

//Tanımlamalar

const Discord = require('discord.js'); //discord.js tanımlaması (GEREKLİ)
const { MessageEmbed } = require('discord.js'); //MessageEmbed Tanımlaması (GEREKLİ)


//Kullanım

const embed = new Discord.MessageEmbed()

.setColor('RED') //Embed mesaj renginizi ayarlar örnek : RENK ADI : BLUE | RENK KODU :  #003399
.setTitle('BAŞLIĞINIZ') //Başlık bölümünü oluşturur
.setURL('https://github.com/UmutSonmezGithub') //Belirtiğiniz yere link koymanızı sağlar 
.setAuthor('Drapper') //Başlığın üstüne yazar bölmesi açar
.setDescription('Açıklamanız') //Uzun açıklamalarınızı tek yerde yazabilceğiniz kısım \n ekleyerek bi alt kısma geçebilrsiniz
.setThumbnail('Fotoğraf Link') //Embed mesajın sağ üstüne profil | resim kısmı açar
.addField('Açıklama', 'Açıklama2') //Yeni satır bölümleri oluiturur
.setImage('RESİM LİNK') //Embed Mesajın alt kısmına resim bölümü açar
.setTimestamp() //Footer kısmında saat'i gösterir
.setFooter('Drapper'); //Embed mesajınızın en alt kısmında bir bölüm oluşturur

message.channel.send(embed) //Tanımladığınız embedi kullanıldığı kanala gönderir



//Aktif etmenizi sağlayan bölüm

client.on('message', message => {
          
          if (message.content.startsWith('drapper')) {
          
          
          //MessageEmbed Kısmı



  }
          });
