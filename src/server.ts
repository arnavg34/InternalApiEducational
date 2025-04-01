import app from './app';
import config from './config/config';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

app.get('/login', (req,res) => {
  res.sendFile('static/index.html', { root: __dirname });
})
app.get('/signup', (req,res) => {
  res.sendFile('static/index.html', { root: __dirname });
})
app.get('/home', (req,res) => {
  res.sendFile('static/index.html', { root: __dirname });
})