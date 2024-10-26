const User = require("../Models/users"); // استيراد نموذج المستخدم

// _______________________________________getAllUsers
const getAllUsers = async (req, res) => {
  try {
    // جلب جميع المستخدمين من قاعدة البيانات
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء جلب المستخدمين.", error });
  }
};

// _______________________________________toggleUserActivation
const toggleUserActivation = async (req, res) => {
  try {
    const { userId } = req.body; // استلام userId من جسم الطلب

    // جلب المستخدم بناءً على _id
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "المستخدم غير موجود." });
    }

    // عكس حالة التفعيل
    user.isActive = !user.isActive;

    // تحديث المستخدم في قاعدة البيانات
    await user.save();

    res.status(200).json({ message: "تم تحديث حالة المستخدم بنجاح.", user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء تحديث حالة المستخدم.", error });
  }
};

module.exports = { getAllUsers, toggleUserActivation };
