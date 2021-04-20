import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('你好');
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
