const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menu.js');
//Menu
router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newMenu = new menuItem(data);

        const response = await newMenu.save();
        console.log('Menu data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await menuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log('error', err)
    }
});

router.get('/:taste',async(req,res) =>{
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const response = await menu.find({ taste: tasteType })
            console.log('Taste response fetched');
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invaild taste type' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
})

 module.exports = router;