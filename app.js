const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io", //emailing service host
    port: 2525, // emailing service port
    auth: {
      user: "09f708a74d3284", // username
      pass: "3dbb45be155b20" // password
    }
  });

const emailOptions = (name,recieverEmail)=>{
    return email = {
        from: 'sender@sampleMail.com',
        to: recieverEmail,
        subject: 'Welcome to our website',
        html: `
       <h1> Hi ${name} ! </h1>
        <br>
        <h2> Welcome To our Website. </h2>
        <br>
        For any Queries, Please contact : XXXXXXXXXX
        <br>
        Thanks and Regards
        <br>
        Website Team
        `
    }
}

const mailer = () => {

    let name = "Roy";
    let recieverEmail = 'roy@gmail.com'

    email = emailOptions(name,recieverEmail);

    transporter.sendMail(email);

}



mailer();

