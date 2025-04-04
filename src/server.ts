import app from './app';
import config from './config/config';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

app.get('/login', (req,res) => {
  res.sendFile('static/login/index.html', { root: __dirname });
})
app.get('/signup', (req,res) => {
  res.sendFile('static/signup/index.html', { root: __dirname });
})
app.get('/home', (req,res) => {
  res.sendFile('static/home/index.html', { root: __dirname });
})