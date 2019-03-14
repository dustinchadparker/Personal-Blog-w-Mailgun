import * as express from "express";
import * as stripeLoader from "stripe";

const router = express.Router();

const stripe = new stripeLoader("TESTKEYGOESHERE");

const charge = (token: string, amt: number) => {
        return stripe.charges.create({
            amount: amt * 100,
            currency: 'USD',
            source: token,
            description: 'Statement Description'
        })
};

router.post("/", async (req, res, next) => {
    console.log(charge);
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    
    
    alert("Thank you for your payment");
    res.send("Charged!");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default router;

// sandbox44af74c271da46d09ecd5cd2ca9c6f64.mailgun.org
// key-98106211e809d9b0953e7d2f261a4797