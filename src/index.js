const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const Quote = require('../quotes.json')
const {sendEmail} = require('./service/email-service')
const cron = require('node-cron');


const startServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
        
        const random = Math.floor(Math.random() * Quote.length);
        const response = Quote[random];
        cron.schedule('0 8 * * *', () => {
            sendEmail
            (
                '<mail_From>@gmail.com',    // sender emailId
                '<mail_To>@gmail.com',      // reciever emailId
                'Quote Of the day',         // title
                response.quote              // text
            )
        })
    })
}

startServer();