const express = require("express");
const router = express.Router();
const { getContacts } = require("../Controllers/DASHContact ");

// راوتر لعرض التعليقات مع الباجينيشن
router.get("/contacts", getContacts);

module.exports = router;
