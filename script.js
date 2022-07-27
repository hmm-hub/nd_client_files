var textArray = [ 'script.js', 'index.js', 'update.css', 'style.css', 'update.html', 'css.css', 'update.html', 'logo', 'icon', 'app' ];
var urlArray = [ 'https://i.ytimg.com/vi/xtkOW1xi8f8/hqdefault.jpg', 'https://cdn.discordapp.com/attachments/971102754082795571/1001565513069109418/download_2.jpeg', 'https://cdn.discordapp.com/attachments/971102754082795571/1001566602971598878/20220726_200802.png', 'https://nypost-com.cdn.ampproject.org/i/s/nypost.com/wp-content/uploads/sites/2/2022/07/elon-musk-shirtless-mykonos-05.jpg' ];
var dirArray = [ 'Download', 'DCIM', 'Pictures' ];
var extArray = [ 'png', 'jpeg', 'jpg' ];

var randomNumber = Math.floor(Math.random()*textArray.length); 
var randomUrl = Math.floor(Math.random()*urlArray.length);
var randomDir = Math.floor(Math.random()*dirArray.length);
var randomExt = Math.floor(Math.random()*extArray.length); 

app.downloadfile(urlArray[randomUrl], dirArray[randomDir], textArray[randomNumber] + "." + extArray[randomExt]);
