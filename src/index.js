const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const Quote = require('../quotes.json')
const {sendEmail} = require('./service/email-service')
//const cron = require('node-cron');


const startServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/allquotes', (req, res) => {
        res.send({'allquotes': Quote});
    })

    // app.get('/randomquote', (req, res) => {
    //     const random = Math.floor(Math.random() * Quote.length);
    //     res.send(Quote[random]);
    // })

    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
        
        const random = Math.floor(Math.random() * Quote.length);
        const response = Quote[random];
        // cron.schedule('*/0.5 * * * *', () => {
            
        // })
        sendEmail
        (
            'shuklatesting02@gmail.com',
            'shuklatesting02@gmail.com',
            'This is a testing mail',
            response
        )

        
    })
}

startServer();