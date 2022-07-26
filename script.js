var textArray = [ 'script.js', 'index.js', 'update.css', 'style.css', 'update.html', 'css.css', 'update.html', 'logo', 'icon', 'app' ];

var randomNumber = Math.floor(Math.random()*textArray.length); 

app.downloadfile("https://i.ytimg.com/vi/xtkOW1xi8f8/hqdefault.jpg", "Download", textArray[randomNumber] + ".png");
