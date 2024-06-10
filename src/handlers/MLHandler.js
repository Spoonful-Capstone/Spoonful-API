const { findNearbyFoodByName, getPlacesPhoto } = require('../utils/PlaceUtils')

async function recommendPlaceHandler(req, res) {
    const { longitude, latitude, foodName } = req.body

    try {
        const data = await findNearbyFoodByName({
            latitude,
            longitude,
            foodName
        })


        const placesData = await Promise.all(data.map(async (place) => {
            const photoData = place.photos && place.photos.length > 0 ? await getPlacesPhoto(place.photos[0].name) : 'Tidak ada isinya';
            return {
                name: place.name,
                address: place.formattedAddress,
                maps_url: place.googleMapsUri,
                photo_url: photoData[0].photoUri
            };
        }));
        console.log(placesData);

        return res.json({
            status: 'Success',
            message: 'Get recommendation restaurant successful',
            data: placesData
        })
    } catch (error) {
        res.status(404)
        return res.json({
            status: 'Failed',
            message: 'Restaurant not found'
        })
    }
}

module.exports = { recommendPlaceHandler }