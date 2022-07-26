try {
    app.downloadfile("https://i.ytimg.com/vi/xtkOW1xi8f8/hqdefault.jpg", "Download", "file.png");
  } catch (Error) {
    try {
      app.requeststorage();
    } catch (Error) {}
  }
