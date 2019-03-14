import * as express from "express";
import * as mailgunLoader from "mailgun-js";

const router = express.Router();

let mailgun = mailgunLoader({
  apiKey: "key-98106211e809d9b0953e7d2f261a4797",
  domain: "sandbox44af74c271da46d09ecd5cd2ca9c6f64.mailgun.org"
});

const sendMail = (
  to: string,
  from: string,
  subject: string,
  content: string
) => {
  let data = {
    to,
    from,
    subject,
    text: content
  };
  return mailgun.messages().send(data);
};

router.post("/mail", async (req, res, next) => {
  try {
    await sendMail(
      "authorizedemail@gmail.com",
      req.body.email,
      req.body.subject,
      req.body.messages
    );
    res.send("Email sent!");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default router;
