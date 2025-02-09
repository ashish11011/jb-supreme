import emailjs from '@emailjs/browser';

export function sendMail(data) {
    var templateParams = {...data};
    emailjs.init({
        publicKey: 'FBv1BCSG_tOCgDQ-w',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'dev.jbsupreme@gmail.com',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });

    emailjs.send('service_c0fmogd', 'template_nkhsked', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            // return "form is successfully submitted"
        },
        (error) => {
            console.log('FAILED...', error);
            // return "Something went wrong, please try again"
        },
    );
}