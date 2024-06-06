const { PlacesClient } = require('@googlemaps/places').v1
const { default: axios } = require('axios')
const dotenv = require('dotenv')
const path = require('path')

const keyFilename = path.resolve('./serviceaccountkey.json')

dotenv.config()

async function findNearbyFoodByName({ latitude, longitude, foodName }) {
    const apiKey = process.env.PLACES_API_KEY
    const type = 'restaurants'
    const radius = 1500

    const placeClient = new PlacesClient({
        projectId: 'spoonful-bangkit-project',
        keyFilename
    })

    const request = {
        textQuery: foodName,
    }

    const response = await placeClient.searchText(request, {
        otherArgs: {
            headers: {
                'X-Goog-FieldMask': 'places.displayName'
            }
        }
    })

    return response
}

module.exports = { findNearbyFoodByName }