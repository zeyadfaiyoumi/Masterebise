const AdminUser = require("../Models/adminUserModel");

// Handle admin login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const admin = await AdminUser.findOne({ email });

    if (!admin || admin.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { loginAdmin };
