const bodyParser = require('body-parser');
const express = require('express');

const app = express();

let username = 'John Wick';

app.listen(4200);

app.get('/exit', (req, res) => {
   process.exit(1);
});

app.get('/', (req, res) => {
    res.send(`
    <html>
      <body>
        <h1>New version, Dev</h1>
        <h1>Hello, ${username}!</h1>
        <br/>
        <form action="/set-username" method="POST">
          <div class="form-control">
            <label>Username</label>
            <input type="text" name="username">
          </div>
          <br/>
          <button>Enter your name</button>
        </form>
      </body>
    </html>
  `);
});

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.post('/set-username', (req, res) => {
    const obtainedUsername = req.body.username;
    console.log('IN SET-USERNAME - USERNAME SET: ' + obtainedUsername);
    username = obtainedUsername;
    res.redirect('/');
});
