const express = require('express')
const Item = require('../models/Item')

const router = express.Router()

// Route to get all Items
router.get('/', (req, res, next) => {
  Item.find()
    .then(items => {
      console.log(`THESE ARE ALL THE ITEMS IN OUR DB ${items}`);
      res.json(items)
    })
    .catch(err => next(err))
})

// Route to add an Item
router.post('/', (req, res, next) => {
  console.log(`THE BODY FED TO THE BACK END : ${req.body}`);
  let { name, price, color, description, category, stock } = req.body
  Item.create({ name, price, color, description, category, stock })
    .then(item => {
      res.json({
        success: true,
        item,
      });
    })
    .catch(err => next(err));
})


// Route to Remove an Item

// Route to Edit an Item

router.post('/edit', (req, res, next) => {
  const { itemId, name, price, color, description, category, stock } = req.body
  if (!name || !description || !price) {
    res.status(400).json({ message: 'Indicate Name, Description and Price to Keep editing' });
    return
  }
  Item.findOne({ itemId })
    .then(itemData => {
      if (itemData !== null) {
        res.status(409).json({ message: 'The username already exists' })
        return
      }
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)
      const newUser = new User({ username, password: hashPass, name })
      return newUser.save()
    })
    .then(userSaved => {
      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userSaved, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userSaved.password = undefined
        res.json(userSaved)
      })
    })
    .catch(err => next(err))
})


module.exports = router
