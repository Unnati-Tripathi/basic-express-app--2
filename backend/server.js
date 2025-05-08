// const express= require('express');
import express from 'express';
const app= express();
app.get('/' , (req,res)=>{
    res.send('Server is now ready');
});

app.get('/api/jokes' , (req,res)=>{
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke',
        }, 
        {
            id:2,
            title: 'B joke',
            content: 'This is a 2 joke',
        }, 
        {
            id:3,
            title: 'C joke',
            content: 'This is a 3 joke',
        }, 
        {
            id:4,
            title: 'D joke',
            content: 'This is a 4 joke',
        }, 
        {
            id:5,
            title: 'E joke',
            content: 'This is a 5 joke',
        }, 
    ];
    res.send(jokes);
});


const port= process.env.PORT || 3000;
//ab agar hmne env file bnai h or usme const PORT=3000 h tb tto thik.. verna localhost pr ni h to  aise he 3000 pr run krado.. 

app.listen(port , ()=>{
    console.log(`Server running on http://localhost:${port}`);
});


