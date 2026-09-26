const Review = require('../models/review.model.js')
const addReviews = async (req, res) => {
    try {
        const {productId, rating , comment} = req.body 
        const rate = await Review.create({user : req.user.id, product : productId, rating, comment})
        res.status(201).json({success:true, message:"you gave rate to this product, Thank You!", data : rate })
    } catch (error) {
        return res.status(500).json({success : false, message : "server error!", error: error.message})
    }
}
module.exports = {addReviews}