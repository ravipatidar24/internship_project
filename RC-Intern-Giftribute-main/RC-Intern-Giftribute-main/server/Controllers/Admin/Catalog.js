const Gift = require('../../Database/Models/GiftsHome');
const Cart = require('../../Database/Models/Cart')

exports.addProduct = async (req, res) => {
  try {
    const { image, name, description, price } = req.body;
    console.log('new product is ', req.body)
    // Create a new gift product
    const newProduct = new Gift({
      image,
      name,
      description,
      price
    });

    // Save the new product to the database
    await newProduct.save();

    res.status(200).json({ success: true, message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Failed to add product' });
  }
};


exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    console.log('Gift id is ', id);

    // Remove the gift from the Gift collection
    const deletedGift = await Gift.findByIdAndDelete(id);

    if (deletedGift) {
      // Remove the gift from the Cart collection
      await Cart.updateMany(
        { 'items.productId': id },
        { $pull: { 'items': { 'productId': id } } }
      );

      res.status(200).json({ success: true, message: 'Product removed successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Gift not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Failed to remove product' });
  }
};
