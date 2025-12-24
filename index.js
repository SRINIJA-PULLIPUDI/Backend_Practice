import express from 'express';
const app = express();
app.use(express.json());
const PORT = 7007;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/page-1', (req, res) => {
  res.send('This is Page 1');
});

app.get('/page-2', (req, res) => {
  res.send('This is Page 2');
});
 
app.post('/page-3', (req, res) => {
    let data = req.body
    console.log(data);
    res.send('Data added successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});