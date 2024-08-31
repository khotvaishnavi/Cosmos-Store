const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.CLOUDINARY_MODE,
  client_id: process.env.CLOUDINARY_CLIENT_ID,
  client_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

module.exports = paypal;
