import express from 'express';

import studentsRouter from './Routes/studentsRoutes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/',studentsRouter);

app.get('/users',(req,res)=>{
    console.log('hello this is');
    res.send("hello this is from backend");
})

app.listen(7007,()=>{
    console.log(`Server running on port 7007`);
});