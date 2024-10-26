const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // يجب أن يكون لديك نموذج للمستخدم
  },
  name: {
    type: String,
    required: true, // الاسم مطلوب
  },
  email: {
    type: String,
    required: true, // البريد الإلكتروني مطلوب
    match: /.+\@.+\..+/, // التحقق من صيغة البريد الإلكتروني
  },
  message: {
    type: String,
    required: true, // الرسالة مطلوبة
    minlength: 10, // الحد الأدنى لطول الرسالة
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
