const Flower = require('../../Database/Models/Flowers');
const Gift = require('../../Database/Models/GiftsHome')
const Plant = require('../../Database/Models/Plants')
const Cake = require('../../Database/Models/Cakes')

exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    //console.log('hello')

    res.status(200).json(flowers);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server error' });
  }
};

exports.getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    //console.log('hello')

    res.status(200).json(plants);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server error' });
  }
};

exports.getAllCakes = async (req, res) => {
  try {
    const cakes = await Cake.find();
    //console.log('hello')

    res.status(200).json(cakes);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Server error' });
  }
};

exports.getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    console.log('hello')

    res.status(200).json(gifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

