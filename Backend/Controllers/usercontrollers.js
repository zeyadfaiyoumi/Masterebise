const User = require("../Models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";
// ____________________________________________signup________________________
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // تشفير كلمة المرور
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // تخزين التوكن في الكوكيز
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    });
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};
// ____________________________________________login________________________
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      // مقارنة كلمة المرور
      return res.status(401).json({ message: " المعلومات غير صحيحه  " });
    }
    if (!user.isActive) {
      return res.status(403).json({ message: "اشتراكك انتهى " });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    }); // تعيين التوكن في الكوكي

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error });
  }
};
// ____________________________________________googleSignup________________________
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.CLIENT_SECRET
);
exports.googleSignup = async (req, res) => {
  try {
    const { id_token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
      secret: process.env.CLIENT_SECRET,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error("Failed to get payload from Google token");
    }

    const { email, name, picture } = payload;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        profilePicture: picture,
        googleId: payload.sub,
      });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    });

    res
      .status(200)
      .json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Google signup error:", error);
    res.status(500).json({ message: "Error during Google signup" });
  }
};
// ____________________________________________loginSignup________________________
exports.googleLogin = async (req, res) => {
  try {
    const { id_token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name } = ticket.getPayload();
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Google login failed", error });
  }
};
