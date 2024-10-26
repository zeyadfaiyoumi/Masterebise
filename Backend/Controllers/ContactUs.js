const ContactUs = require("../Models/ContactUs"); // استيراد نموذج التواصل

// _______________________________________addContactUs
const addContactUs = async (req, res) => {
  try {
    // استلام البيانات من واجهة المستخدم
    const { name, email, message } = req.body;
    const user_id = req.user.id; // تأكد أن هذا موجود

    // التحقق من وجود بيانات الإدخال
    if (!name || !email || !message) {
      return res.status(400).json({ message: "يرجى ملء جميع الحقول." });
    }

    // إنشاء كائن جديد من نموذج التواصل
    const contact = new ContactUs({
      name,
      email,
      message,
      user_id, // إضافة معرف المستخدم
    });

    // حفظ البيانات في قاعدة البيانات
    await contact.save();

    // إرسال رد بنجاح
    res.status(201).json({ message: "تم إرسال الرسالة بنجاح!", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء إرسال الرسالة.", error });
  }
};

module.exports = { addContactUs };
