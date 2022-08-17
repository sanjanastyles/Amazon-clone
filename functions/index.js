/* eslint-disable indent */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line comma-dangle
  "sk_test_51LPTsTSDqxdWtmhaftlDcgYPqYHgUmsNzrS7u3cins8C2niFLWIg9PNm1Y0V0hiwwMteFhOGTehjVabDESZKcOZD00OmzdmCmL"
);

// API

// App Config
const app = express();

// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    ClientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-d14cb/us-central1/api
