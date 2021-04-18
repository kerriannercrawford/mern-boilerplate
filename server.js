const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// mongoose DB url
const CONNECTION_URL = '';

const PORT = 3000;
const app = express();

const mainRouter = require('./routes/mainRouter.js');

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log('Connected to Database')))
  .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);

app.use(express.static(__dirname + '/public'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

app.use('/api', mainRouter);
