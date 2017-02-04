module.exports = {
  renderIndex: (req, res) => {
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
          <title>React Dev Server</title>
        </head>
        <body>
          <div id="app"></div>
          
          <script src="/bundle.js"></script>
        </body>
      </html>
    `);
  }
};