const express = require('express');
const app = express();
const PORT = 5000;

const monsters = require('./modules/monsters');

app.use(express.static('server/public'));

app.get('/monsters', (req, res) => {
    loaded();
    res.send(monsters);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

function loaded() {
    console.log('Page loaded');
}