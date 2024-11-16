

// // مسار لجلب المنتجات المفضلة
const express = require("express");
const FavoriteControllers = require("../Controllers/Favorite");
const Auth = require("../Middlewares/auth");

const router = express.Router();

router.post("/Favorite", Auth, FavoriteControllers.addFavorite); // تأكد من أن هذا السطر صحيح
router.get("/Favorite", Auth, FavoriteControllers.getFavoriteProducts);
router.delete("/Favorite/:productId", Auth, FavoriteControllers.removeFavorite);

module.exports = router; // تأكد من تصدير الراوتر بشكل صحيح
