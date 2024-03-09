const express = require("express");
const { getItem } = require("../services/itemService.js");
const buyItemRouter = express.Router()

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

buyItemRouter.post('/create-checkout-session', async (req, res) => {
  const itemID = Number(req.body.data);
  const fetchedItem = await getItem(itemID);
  
  // Assuming `getItem` returns an object with a `price` property in the smallest currency unit (e.g., cents)
  const price = Number(fetchedItem.price);
  const pricedInCents = price * 100;

  console.log("HEY")
  
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: fetchedItem.name,
          },
          unit_amount: pricedInCents,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `https://${process.env.HOST}/return.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://${process.env.HOST}/cancel.html`
    });
    console.log(`About to redirect ${session.url}`)
    res.json({url: session.url});

  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send({error: error.message});
  }
});

buyItemRouter.get('/session-status', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
    res.json({
      status: session.status,
      customer_email: session.customer_details.email
    });
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).send({error: error.message});
  }
});


buyItemRouter.get("/getItem/:itemID", async (req, res, next) => {

  const fetchItem = await getItem(req.params.itemID);
  console.log(fetchItem)

  res.json(fetchItem);
});

buyItemRouter.put("/address", (req, res, next) => {

    // find userID 
        // put
    // if cant return 404 user not found
});

/*
if (req.session.authorized) {
    // next middleware function is invoked
    res.next();
  else {
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
};

USE TO AUTHENTICATE USER WHEN TRYING TO BUY ITEM
*/

module.exports = buyItemRouter;