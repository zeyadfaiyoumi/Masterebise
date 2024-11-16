const Order = require("../Models/Order ");
const Product = require("../Models/product");
// ------ creat order ---------------------------
const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      city,
      phoneNumber,
      storeName,
      address,
      notes,
      cartItems,
      totalAmount,
      expectedProfit,
    } = req.body;
    const user_id = req.user.id;
    const order = new Order({
      user_id,
      customerName,
      city,
      phoneNumber,
      storeName,
      address,
      notes,
      cartItems,
      totalAmount,
      expectedProfit,
    });

    await order.save();

    res.status(201).json({ message: "Order created successfully!", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create order.", error });
  }
};
// -------------------------wallet-----------------------------
const getUserOrderStats = async (req, res) => {
  const userId = req.user.id; // افترض أن معرف المستخدم موجود في req.user بعد المصادقة

  try {
    const orders = await Order.find({ user_id: userId });

    // جمع الـ expectedProfit و totalAmount
    const totalExpectedProfit = orders.reduce(
      (acc, order) => acc + order.expectedProfit,
      0
    );
    const totalAmount = orders.reduce(
      (acc, order) => acc + order.totalAmount,
      0
    );
    const totalOrders = orders.length;
    // إرسال النتائج إلى الفرونت إند
    res.status(200).json({
      totalExpectedProfit,
      totalAmount,
      totalOrders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء جمع البيانات." });
  }
};
// ------------------
const getUserOrders = async (req, res) => {
  const userId = req.user?.id; // تأكد من أن معرف المستخدم موجود

  if (!userId) {
    return res
      .status(400)
      .json({ message: "معرف المستخدم غير موجود أو غير صالح." });
  }

  try {
    // جلب جميع الطلبات الخاصة بالمستخدم
    const orders = await Order.find({ user_id: userId }).lean();

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "لا توجد طلبات لهذا المستخدم." });
    }

    // جمع كل معرفات المنتجات من جميع الطلبات
    const productIds = orders.flatMap((order) =>
      order.cartItems && order.cartItems.length > 0
        ? order.cartItems.map((item) => item._id.toString()) // تأكدنا من أنه يتم استخدام _id في cartItems
        : []
    );

    if (productIds.length === 0) {
      return res.status(404).json({ message: "لا توجد منتجات في الطلبات." });
    }

    // جلب جميع المنتجات المطلوبة في عملية واحدة
    const products = await Product.find({
      _id: { $in: productIds },
    }).lean();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "لم يتم العثور على منتجات." });
    }

    // إنشاء خريطة للمنتجات للوصول السريع
    const productMap = new Map(
      products.map((product) => [product._id.toString(), product])
    );

    // معالجة كل طلب وإضافة تفاصيل المنتجات
    const orderDetails = orders.map((order) => {
      const cartItemsDetails = order.cartItems
        .map((item) => {
          const product = productMap.get(item._id.toString()); // تأكدنا من استخدام _id
          if (!product) {
            console.log(`المنتج غير موجود للمعرف: ${item._id}`);
            return null;
          }

          return {
            _id: item._id,
            productId: item._id, // استخدمنا _id من cartItem وليس productId
            productName: product.productName,
            quantity: item.quantity,
            suggestedPrice: item.suggestedPrice,
            cost: item.cost,
            imageURL: product.imageURL,
            description: product.description,
            supplier: product.supplier,
            category: product.category,
            isActive: product.isActive,
          };
        })
        .filter((item) => item !== null); // إزالة المنتجات غير الموجودة

      return {
        _id: order._id,
        customerName: order.customerName,
        city: order.city,
        phoneNumber: order.phoneNumber,
        storeName: order.storeName,
        address: order.address,
        notes: order.notes,
        cartItems: cartItemsDetails,
        totalAmount: order.totalAmount,
        expectedProfit: order.expectedProfit,
        createdAt: order.createdAt,
        cancelled: order.cancelled,
        complete: order.complete,
      };
    });

    res.status(200).json(orderDetails);
  } catch (error) {
    console.error("خطأ في جلب الطلبات:", error);
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء جلب الطلبات.", error: error.message });
  }
};
// -----------------------------------
const cancelOrder = async (req, res) => {
  const { orderId } = req.params; // جلب معرّف الطلب من الـ URL Parameters

  try {
    // محاولة العثور على الطلب باستخدام معرّف الطلب
    const order = await Order.findById({ _id: orderId });

    if (!order) {
      return res.status(404).json({ message: "الطلب غير موجود." });
    }

    // تحديث قيمة cancelled إلى true
    order.cancelled = true;

    // حفظ التغييرات في قاعدة البيانات
    await order.save();

    return res.status(200).json({ message: "تم إلغاء الطلب بنجاح.", order });
  } catch (error) {
    console.error("خطأ في إلغاء الطلب:", error);
    return res
      .status(500)
      .json({ message: "حدث خطأ أثناء إلغاء الطلب.", error: error.message });
  }
};

module.exports = { createOrder, getUserOrderStats, getUserOrders, cancelOrder };
