// controllers/ordersController.js
const Order = require("../Models/Order ");
const Product = require("../Models/product");

const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).lean();

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "لا توجد طلبات." });
    }

    const productIds = orders.flatMap((order) =>
      order.cartItems && order.cartItems.length > 0
        ? order.cartItems.map((item) => item._id.toString())
        : []
    );

    if (productIds.length === 0) {
      return res.status(404).json({ message: "لا توجد منتجات في الطلبات." });
    }

    const products = await Product.find({
      _id: { $in: productIds },
    }).lean();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "لم يتم العثور على منتجات." });
    }

    const productMap = new Map(
      products.map((product) => [product._id.toString(), product])
    );

    const orderDetails = orders.map((order) => {
      const cartItemsDetails = order.cartItems
        .map((item) => {
          const product = productMap.get(item._id.toString());
          if (!product) {
            console.log(`المنتج غير موجود للمعرف: ${item._id}`);
            return null;
          }

          return {
            _id: item._id,
            productId: item._id,
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
        .filter((item) => item !== null);

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

const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "الطلب غير موجود." });
    }

    order.cancelled = true;
    await order.save();

    res.status(200).json({ message: "تم إلغاء الطلب بنجاح." });
  } catch (error) {
    console.error("خطأ في إلغاء الطلب:", error);
    res.status(500).json({ message: "حدث خطأ أثناء إلغاء الطلب." });
  }
};
const markAsDelivered = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "الطلب غير موجود." });
    }

    // التأكد من أن الطلب ليس قد تم توصيله مسبقاً
    if (order.complete) {
      return res.status(400).json({ message: "الطلب قد تم توصيله بالفعل." });
    }

    // تغيير الفلاق إلى true
    order.complete = true;
    await order.save();

    res.status(200).json({ message: "تم تحديث حالة الطلب إلى تم التوصيل." });
  } catch (error) {
    console.error("خطأ في تحديث حالة الطلب:", error);
    res.status(500).json({ message: "حدث خطأ أثناء تحديث حالة الطلب." });
  }
};
module.exports = { getUserOrders, cancelOrder, markAsDelivered };
