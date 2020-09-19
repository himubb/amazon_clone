const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQqEjDJ9jX2AYAYKxEeSZQySnGgl2X4piPRUUV3WtxHBNlh7xF3fYeB4IUB6CBgmssm9ClyEgbkD3j3qSUkAr7K00e2R0cD53"
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//API

//App 🔂
const app = express();

//Middlewoares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment recieved bitch!! of amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });
  //OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

//listen commands
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-f0511/us-central1/api
