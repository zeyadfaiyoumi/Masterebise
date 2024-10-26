const Favorite = require("../Models/Favorite");
const Product = require("../Models/product");
// _______________________________________addFavorite
const addFavorite = async (req, res) => {
  try {
    const user_id = req.user.id; // الحصول على معرف المستخدم من ملف الأوث
    const { product_id } = req.body; // الحصول على معرف المنتج من الطلب

    // التحقق مما إذا كان المنتج موجودًا بالفعل في المفضلة
    const existingFavorite = await Favorite.findOne({ user_id, product_id });

    if (existingFavorite) {
      return res
        .status(400)
        .json({ message: "هذا المنتج موجود بالفعل في المفضلة." });
    }

    // إذا لم يكن المنتج موجودًا، أضفه إلى المفضلة
    const favorite = new Favorite({ user_id, product_id });
    await favorite.save();

    res
      .status(201)
      .json({ message: "تم إضافة المنتج إلى المفضلة بنجاح!", favorite });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء إضافة المنتج إلى المفضلة.", error });
  }
};
// _______________________________________getFavoriteProducts

const getFavoriteProducts = async (req, res) => {
  try {
    const user_id = req.user.id;

    const favorites = await Favorite.find({ user_id }).populate({
      path: "product_id",
      select:
        "productName cost suggestedPrice supplier imageURL description isActive category",
    });

    if (favorites.length === 0) {
      return res.status(404).json({ message: "No favorite products found." });
    }

    // استخراج تفاصيل المنتجات
    const products = favorites
      .filter((favorite) => favorite.product_id !== null) // التأكد من وجود المنتج
      .map((favorite) => favorite.product_id);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to retrieve favorite products.", error });
  }
};
// _______________________________________removeFavorite
const removeFavorite = async (req, res) => {
  try {
    const user_id = req.user.id; // الحصول على معرف المستخدم من ملف الأوث
    const product_id = req.params.productId; // الحصول على معرف المنتج من المسار

    // البحث عن المفضلة بناءً على معرف المستخدم ومعرف المنتج
    const favorite = await Favorite.findOneAndDelete({ user_id, product_id });

    if (!favorite) {
      return res.status(404).json({ message: "هذا المنتج ليس في المفضلة." });
    }

    res.status(200).json({ message: "تم حذف المنتج من المفضلة بنجاح!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء حذف المنتج من المفضلة.", error });
  }
};

module.exports = {
  addFavorite,
  getFavoriteProducts,
  removeFavorite,
};
