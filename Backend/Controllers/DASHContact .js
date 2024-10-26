const Contact = require("../Models/ContactUs");

const getContacts = async (req, res) => {
  try {
    // استلام رقم الصفحة وحجم الصفحة من ال query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    // حساب الأرقام الخاصة بالتقسيم
    const skip = (page - 1) * limit;

    // جلب التعليقات مع الباجينيشن
    const contacts = await Contact.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // حساب العدد الكلي للتعليقات لاحتساب العدد الإجمالي للصفحات
    const totalContacts = await Contact.countDocuments();

    return res.json({
      contacts,
      totalPages: Math.ceil(totalContacts / limit),
      currentPage: page,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error fetching contacts", error: err });
  }
};

module.exports = {
  getContacts,
};
