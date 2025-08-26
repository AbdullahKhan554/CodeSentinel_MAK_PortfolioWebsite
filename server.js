const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for sending email
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create transporter using Gmail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "m4mak629@gmail.com", // replace with your Gmail
        pass: "fbvc vijp dekj viaa"    // use Gmail App Password, NOT your Gmail password
      }
    });

    // Email options
    let mailOptions = {
      from: email,
      to: "m4mak629@gmail.com", // Your Gmail again (receiver)
      subject: `Portfolio Contact Form: ${name}`,
      text: `You got a new message!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
