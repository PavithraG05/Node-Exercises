const express = require('express')
const router = express.Router({ mergeParams: true })



router.get('/', (req, res) => {
    res.send(`List of reviews for a product with id: ${req.params.productid}`)
})

router.get('/:reviewid', (req, res) => {
    res.send(`List review: ${req.params.reviewid} for a product with id: ${req.params.productid}`)
})

router.post('/:reviewid', (req, res) => {
    res.send(`add a review: ${req.params.reviewid} for a product with id: ${req.params.productid}`)
})

// Route to get a specific user
router.put('/:reviewid', (req, res) => {
    res.send(`updating the review: ${req.params.reviewid} for a product with id: ${req.params.productid}`)
})

router.delete('/:reviewid', (req, res) => {
    res.send(`deleting the review:${req.params.reviewid} for a product with id: ${req.params.productid}`)
})

module.exports = router