var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: (process.env.GMAIL_USER),
    pass: (process.env.GMAIL_PASS)
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: (process.env.GMAIL_USER),
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)