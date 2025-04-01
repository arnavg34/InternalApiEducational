import app from './app';
import config from './config/config';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

app.get('/', (req,res) => {
  res.sendFile('static/index.html', { root: __dirname });
})