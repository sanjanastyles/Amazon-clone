/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LPTsTSDqxdWtmhaftlDcgYPqYHgUmsNzrS7u3cins8C2niFLWIg9PNm1Y0V0hiwwMteFhOGTehjVabDESZKcOZD00OmzdmCmL"
);

// API

// App Config
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hellow"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    current: "usd",
  });

  res.status(201).send({
    ClientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-d14cb/us-central1/api
