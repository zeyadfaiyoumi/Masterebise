const User = require("../Models/users");
const Product = require("../Models/product");
const Order = require("../Models/Order ");

const getDashboardStatistics = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();
    const totalBillingAmount = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);

    res.status(200).json({
      patients: userCount,
      doctors: productCount,
      appointments: orderCount,
      totalBillingAmount: totalBillingAmount[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving dashboard data" });
  }
};

module.exports = { getDashboardStatistics };
