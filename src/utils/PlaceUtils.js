const { PlacesClient } = require('@googlemaps/places').v1
const { default: axios } = require('axios')
const dotenv = require('dotenv')
const { request } = require('http')
const path = require('path')

const keyFilename = path.resolve('./serviceaccountkey.json')

dotenv.config()

const placeClient = new PlacesClient({
    projectId: 'spoonful-bangkit-project',
    keyFilename,
})

async function findNearbyFoodByName({ latitude, longitude, foodName }) {
    const types = 'restaurants'
    const radius = 500
    const locationRestriction = {
        "circle": {
            "center": {
                "latitude": latitude,
                "longitude": longitude
            },
            "radius": radius
        }
    }


    const request = {
        textQuery: foodName,
        included_types: types,
        openNow: true,
        minRating: 4,
        maxResultCount: 3,
        location_restriction: locationRestriction
    }

    const response = await placeClient.searchText(request, {
        otherArgs: {
            headers: {
                'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.googleMapsUri,places.location,places.rating,places.photos'
            }
        }
    })

    return response[0].places
}

async function findNearbyPlace({ latitude, longitude }) {
    const types = ['restaurant']
    const radius = 500
    const locationRestriction = {
        "circle": {
            "center": {
                "latitude": latitude,
                "longitude": longitude
            },
            "radius": radius
        }
    }

    const request = {
        locationRestriction,
        includedTypes: types,
        openNow: true,
        minRating: 4,
        maxResultCount: 5,
    }

    const response = await placeClient.searchNearby(request, {
        otherArgs: {
            headers: {
                'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.googleMapsUri,places.location,places.rating,places.photos'
            }
        }
    })

    return response[0].places

}

async function getPlacesPhoto(name) {
    const photoName = name + '/media'
    const response = await placeClient.getPhotoMedia({
        maxHeightPx: '200',
        maxWidthPx: '200',
        name: photoName,
        skipHttpRedirect: true
    })

    return response
}

module.exports = { findNearbyFoodByName, findNearbyPlace, getPlacesPhoto }