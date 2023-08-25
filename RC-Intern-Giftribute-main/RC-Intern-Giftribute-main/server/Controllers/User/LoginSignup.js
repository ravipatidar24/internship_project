const myUser = require("../../Database/Models/UserAccounts");
const Cart = require("../../Database/Models/Cart")
const mongoose = require('mongoose');

exports.userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Find the user by email
    const user = await myUser.findOne({ userEmail });

    if (!user) {
      // User with the provided email doesn't exist
      return res.status(201).json({ error: "Invalid Email Address" });
    }

    // TODO: Implement password validation logic here
    // Compare the user's password with the provided password
    // For example:
     
     if (user.userPassword !== userPassword) {
       return res.status(202).json({ error: "Invalid Password" });
     } else {
      res.status(200).json({message: "Login Successful"});
     }

    
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Server error" });
  }
};

exports.userProfile = async (req, res) => {
  try {
    const userEmail  = req.query.email;
    //console.log('my gmail', req.query)
    if (userEmail) {
      
      const existingUser = await myUser.findOne({ userEmail });

      //return the existingUSer object as response
    
       res.status(200).json(existingUser);
    }
    // Check if a user with the provided email already exists
    
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Server error" });
  }
};


exports.userSignup = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userAddress, userPhoneNumber } = req.body;
    //console.log('godspeed')

    // Check if a user with the provided email already exists
    const existingUser = await myUser.findOne({ userEmail });

    if (existingUser) {
      return res.status(201).json({ error: "Email already exists" });
    }

    if (userPassword.length < 6) {
      return res.status(202).json({ error: "Password should be at least 6 characters long" });
    }

    // Create a new user
    const newUser = new myUser({
      userName,
      userEmail,
      userPassword,
      userAddress,
      userPhoneNumber,
    });

    // Save the user to the database
    await newUser.save();

    //Create an empty cart

    const cart = new Cart({ userEmail: userEmail, items: [] });

    // Save the cart to the database
    await cart.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Server error" });
  }
};


