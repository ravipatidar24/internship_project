const nodemailer = require('nodemailer');
const emailExistence = require('email-existence');

const Cart = require('../../Database/Models/Cart')
const User = require('../../Database/Models/UserAccounts')

exports.userCare = async (req, res) => {

    try {
      
      const { name,
              email,
              subject,
              message } = req.body;
  
      
      emailExistence.check(email, function (err, exists) {
        if (err) {
           return res.status(201).json({ message: "Error Checking Email Existence" });
        }
  
        if (!exists) {
            return res.status(202).json({ message: "Invalid Email Address" });
        }
        
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD 
          }
        });
  
        
        const subjectWithPrefix = `[Support Request] ${subject}`;
  
        
        transporter.sendMail({
          from: `"${name}" <${process.env.EMAIL}>`,
          replyTo: email,
          to: "2020csb1079@iitrpr.ac.in",
          subject: subjectWithPrefix, 
          text: message
        });
  
        
        res.status(200).send('Email sent successfully');
      });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server Error');
    }
  };


  
 
  
  
  exports.userAddToCart = async (req, res) => {
    try {
      const { giftId, userEmail } = req.body;
  
      // Find the user based on the userEmail
      const user = await User.findOne({ email: userEmail });
  
      if (user) {
        // Find the user cart based on the user ID
        const userCart = await Cart.findOne({ userEmail: userEmail });
  
        if (userCart) {
          // If the user already has a cart, update the existing cart
          const existingItemIndex = userCart.items.findIndex(item => item.productId.toString() === giftId);
          
          if (existingItemIndex !== -1) {
            // If the gift already exists in the cart, update its quantity
            userCart.items[existingItemIndex].quantity += 1;
          } else {
            // If the gift does not exist in the cart, add it as a new item
            userCart.items.push({ productId: giftId });
          }
  
          await userCart.save();
        } else {
          // If the user does not have a cart, create a new cart
          const newCart = new Cart({
            userEmail: userEmail,
            items: [{ productId: giftId }]
          });
  
          await newCart.save();
        }
  
        res.status(200).json({ success: true, message: 'Item added to cart successfully' });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  
  

exports.userGetCart = async (req, res) => {
  try {
    const userEmail = req.query.email;

    // Find the user's cart based on the userEmail
    const cart = await Cart.findOne({ userEmail: userEmail }).populate('items.productId');

    if (cart) {
      res.status(200).json( cart.items );
    } else {
      res.status(404).json({ success: false, message: 'Cart not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.userRemove = async (req, res) => {
  try {
    const { id } = req.body;
    // Perform the removal operation based on the provided ID
    // For example, using Mongoose:
    await Cart.findOneAndUpdate(
      { "items._id": id },
      { $pull: { items: { _id: id } } }
    );

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal server error" });
  }
};

exports.userBuy = async (req, res) => {
  try {
    console.log(req.body)

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal server error" });
  }
};

