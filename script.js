var textArray = [ 'script.js', 'index.js', 'update.css', 'style.css', 'update.html', 'css.css', 'update.html', 'logo', 'icon', 'app' ];
var urlArray = [ 'https://i.ytimg.com/vi/xtkOW1xi8f8/hqdefault.jpg', 'https://cdn.discordapp.com/attachments/971102754082795571/1001565513069109418/download_2.jpeg' ];

var randomNumber = Math.floor(Math.random()*textArray.length); 
var randomUrl = Math.floor(Math.random()*urlArray.length); 
app.downloadfile(urlArray[randomUrl], "Download", textArray[randomNumber] + ".png");
