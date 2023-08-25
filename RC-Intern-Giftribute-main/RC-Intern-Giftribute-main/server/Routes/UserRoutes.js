const express = require("express");
const router = new express.Router();
const user = require("../Controllers/User/LoginSignup");
const userMisc = require("../Controllers/User/Misc");
const myGifts = require("../Controllers/User/Gifts");

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(express.static(path.resolve(__dirname, 'public')));

router.post("/user/login", user.userLogin);

router.post("/user/register", user.userSignup);

router.get("/user/profile", user.userProfile);

router.post("/user/contact", userMisc.userCare);

router.get("/user/gifts/flowers", myGifts.getAllFlowers);

router.get("/user/gifts/plants", myGifts.getAllPlants);

router.get("/user/gifts/cakes", myGifts.getAllCakes);

router.get("/user/home/gifts", myGifts.getAllGifts);

router.post("/user/cart", userMisc.userAddToCart)

router.get("/user/get-cart", userMisc.userGetCart)

router.delete("/user/remove-item", userMisc.userRemove)

router.post("/user/buy", userMisc.userBuy)


module.exports = router;
