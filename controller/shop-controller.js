const Shop = require("../model/shop");

const getShops = async (req, res) => {
  try {
    const allShops = await Shop.find();
    res.json({
      status: "success",
      allShops: allShops,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const createShop = async (req, res) => {
  const { shopName, city, locationURL } = req.body;

  try {
    const newShop = await Shop.create({
      shopName,
      city,
      locationURL,
    });

    res.json({
      status: "success",
      newShop: newShop,
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const updateShop = async (req, res) => {
  try {
    const { id } = req.params;

    const shop = await Shop.findByIdAndUpdate(id, req.body);

    if (!shop) {
      return res.json({
        status: "Failure",
        message: "shop not found",
      });
    }

    res.json({
      status: "success",
      message: "shop updated",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const deleteShop = async (req, res) => {
  try {
    const { id } = req.params;

    const shop = await Shop.findByIdAndDelete(id);

    if (!shop) {
      return res.json({
        status: "Failure",
        message: "shop not found",
      });
    }

    res.json({
      status: "success",
      message: "shop deleted",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const getSingleShop = async (req, res) => {
  try {
    const { id } = req.params;

    const shop = await Shop.findById(id);
    res.json({
      status: "success",
      shop: shop,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

module.exports = {
  getShops,
  createShop,
  updateShop,
  deleteShop,
  getSingleShop,
};
