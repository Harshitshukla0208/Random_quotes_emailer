const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const {sendEmail} = require('./service/email-service')
const cron = require('node-cron');

const startServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
        
        cron.schedule('0 8 * * *', () => {
            sendEmail
            (
                'shuklatesting02@gmail.com',       // sender emailId
                'shuklatesting02@gmail.com',      // reciever emailId
                'Quote Of the day'               // title
            
            )
        })
    })
}

startServer();