const express = require("express");
const ContactUsControllers = require("../Controllers/ContactUs");
const Auth = require("../Middlewares/auth");

const router = express.Router();

router.post("/ContactUs", Auth, ContactUsControllers.addContactUs); // تأكد من أن هذا السطر صحيح

module.exports = router; // تأكد من تصدير الراوتر بشكل صحيح
