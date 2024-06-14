const { findNearbyFoodByName, getPlacesPhoto, findNearbyPlace } = require('../utils/PlaceUtils')

async function recommendPlaceHandler(req, res) {
    const { longitude, latitude, foodName } = req.body

    try {
        // const data = await findNearbyFoodByName({
        //     latitude,
        //     longitude,
        //     foodName
        // })

        const data = await findNearbyPlace({ latitude, longitude })

        const placesData = await Promise.all(data.map(async (place) => {
            const photoData = place.photos && place.photos.length > 0 ? await getPlacesPhoto(place.photos[0].name) : 'Tidak ada isinya';
            return {
                name: place.displayName.text,
                address: place.formattedAddress,
                maps_url: place.googleMapsUri,
                photo_url: photoData[0].photoUri
            };
        }));
        console.log(placesData);

        if (data.length === 0) throw new Error

        return res.json({
            status: 'Success',
            message: 'Get recommendation restaurant successful',
            data: placesData
        })
    } catch (error) {
        res.status(404)
        console.log(error)
        return res.json({
            status: 'Failed',
            message: 'Restaurant not found'
        })
    }
}

module.exports = { recommendPlaceHandler }