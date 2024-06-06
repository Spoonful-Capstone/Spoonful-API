const { findNearbyFoodByName } = require('../utils/PlaceUtils')

async function recommendPlaceHandler(req, res) {
    const { longitude, latitude } = req.body

    const data = await findNearbyFoodByName({
        latitude: -7.301394,
        longitude: 112.740243,
        foodName: 'ayam geprek'
    })

    return res.json({
        data
    })
}

module.exports = { recommendPlaceHandler }