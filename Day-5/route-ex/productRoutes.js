const express = require('express')
const router = express.Router({ mergeParams: true })

const reviewRoute = require('./reviewRoutes')
router.get('/', (req, res) => {
    // res.send('List of all products')
    if(req.query.price && req.query.sort){
        res.send(`Sorting products based on: ${req.query.sort} and filtering products based on price: ${req.query.price}`);
    }
    else if(req.query.price){
        res.send(`filtering products based on price: ${req.query.price}`);
    }
    else if(req.query.sort){
        res.send(`Sorting products based on: ${req.query.sort}`);
    }
    else{
        res.send('List of all products')
    }
})

router.get('/:productid', (req, res) => {
    res.send(`details of a product: ${req.params.productid}`)
})


router.post('/:productid', (req, res) => {
    res.send(`adding a new product`)
})

// Route to get a specific user
router.put('/:productid', (req, res) => {
    res.send(`updating the existing product: ${req.params.productid}`)
})

router.delete('/:productid', (req, res) => {
    res.send(`deleting the existing product: ${req.params.productid}`)
})

router.use('/:productid/review', reviewRoute)
module.exports = router