const express = require('express');
const router = express.Router();
const person = require('./../models/person')

//POST
router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newPerson = new person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log('error', err)
    }
});

//work type - chef,waiter,etc
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await person.find({ work: workType })
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invaild work type' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
})

//UPDATE function
router.put('/:id', async(req,res)=>{
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,
            runValidators: true,
        })

        if(!response) {
            return res.status(404).json({error: 'person not found'})
        }

        console.log("data updated");
        res.status(200).json(response);

    } catch (err) {

        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
})

//DELETE function
router.delete('/:id', async (req, res) =>{
    try {
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'person not found' })
        }
        console.log('Data deleted');
        res.status(200).json({message: 'person deleted!!'});

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
})
module.exports = router;