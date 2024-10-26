const User = require("../Models/users");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");
const path = require("path");

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
        image: picture,
        googleId: payload.sub,
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, {
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
// ____________________________________________googleLogin________________________
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
// ______________________________getAllUsers____________________________________
exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find({ _id: req.user.id });

    res.status(200).json({ Users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
// ___________________________________updateUser____________________

// exports.updateUser = async (req, res) => {
//   const userId = req.user.id; // الحصول على ID المستخدم المسجل
//   const { name, location, phonNum, password } = req.body; // القيم القادمة من الفرونت إند

//   try {
//     // إنشاء كائن يحتوي على البيانات المحدثة
//     const updatedData = {
//       name,
//       location,
//       phonNum,
//       image: req.fill.path,
//     };

//     // إذا تم إرسال كلمة المرور، نقوم بتشفيرها وإضافتها إلى البيانات المحدثة
//     if (password) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       updatedData.password = hashedPassword; // إضافة كلمة المرور المشفرة
//     }

//     // تحديث بيانات المستخدم في قاعدة البيانات
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       updatedData,
//       { new: true } // هذا الخيار يعيد الكائن المحدث
//     );

//     // تحقق من وجود المستخدم
//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "User updated successfully", user: updatedUser });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// };
exports.updateUser = async (req, res) => {
  const userId = req.user.id; // الحصول على ID المستخدم المسجل
  const { name, location, phonNum, password } = req.body; // القيم القادمة من الفرونت إند
  console.log(req.file);

  if (!name || !location || !phonNum) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // إنشاء كائن يحتوي على البيانات المحدثة
    const updatedData = {
      name,
      location,
      phonNum,
      // تأكد من وجود الصورة قبل الوصول إلى مسارها
      image: req.file ? req.file.path : undefined, // إذا لم تكن الصورة موجودة، نتركها غير محددة
    };

    // إذا تم إرسال كلمة المرور، نقوم بتشفيرها وإضافتها إلى البيانات المحدثة
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword; // إضافة كلمة المرور المشفرة
    }

    // تحديث بيانات المستخدم في قاعدة البيانات
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updatedData,
      { new: true } // هذا الخيار يعيد الكائن المحدث
    );

    // تحقق من وجود المستخدم
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error); // سجّل تفاصيل الخطأ
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//____________________________________checkToken____________________________________

exports.checkAuth = async (req, res) => {
  try {
    res.status(200).json({ authenticated: true });
  } catch (error) {
    res
      .status(500)
      .json({ authenticated: false, message: "Internal server error" });
  }
};
// ____________________________________logout____________________________________

exports.logout = async (req, res) => {
  try {
    // حذف التوكن من الكوكيز عن طريق تعيين قيمة فارغة وتعيين تاريخ انتهاء الصلاحية في الماضي
    res.cookie("token", "", { expires: new Date(0), httpOnly: true });

    // إرسال استجابة تؤكد نجاح عملية تسجيل الخروج
    res.status(200).json({ message: "Successfully logged out." });
  } catch (error) {
    // إرسال استجابة في حال حدوث خطأ
    res.status(500).json({ message: "Internal server error." });
  }
};
