const express = require("express");
const { getDashboardStatistics } = require("../Controllers/dashboardController");
const router = express.Router();

router.get("/dashboard/stats", getDashboardStatistics);

module.exports = router;
