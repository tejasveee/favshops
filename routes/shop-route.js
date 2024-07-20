const express = require("express");
let router = express.Router();

const {
  getShops,
  createShop,
  updateShop,
  deleteShop,
  getSingleShop,
} = require("../controller/shop-controller");

router.route("/").get(getShops);
router.route("/").post(createShop);
router.route("/:id").put(updateShop);
router.route("/:id").delete(deleteShop);
router.route("/:id").get(getSingleShop);

module.exports = router;
