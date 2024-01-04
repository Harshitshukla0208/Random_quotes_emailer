const sender = require('../config/email-config');
const sendEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    });
}
module.exports = {sendEmail}