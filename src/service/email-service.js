const sender = require('../config/email-config');
const Quote = require('../../quotes.json')

const random = Math.floor(Math.random() * Quote.length);
const response = Quote[random];
console.log(response);

const sendEmail = (mailFrom, mailTo, mailSubject) => {
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        html:`  <h1>Quote Of the day</h1>
                <h2>${response.quote}</h2>
                <h2>${response.author}</h2>
            `
    });
}
module.exports = {sendEmail}