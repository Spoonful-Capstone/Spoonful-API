const { prisma } = require("../prisma");

async function getAllFoodHandler(req, res) {
    const all_foods = await prisma.food.findMany()

    if (!all_foods) {
        res.status(500)
        return res.json({
            status: 'Failed',
            message: 'Uknown error'
        })
    }

    res.status(200)
    return res.json({
        status: 'Success',
        message: 'Foods data get successful',
        data: {
            all_foods
        }
    })
}

async function getFoodByIdHandler(req, res) {
    const { id } = req.params

    const food = await prisma.food.findUnique({
        select: {
            ID: true,
            name: true,
            calories: true,
            carbohidrate: true,
            protein: true

        },

        where: {
            ID: id
        },
    })

    if (!food) {
        res.status(404)
        return res.json({
            status: 'Failed',
            message: 'Food Id not found'
        })
    }

    res.status(200)
    return res.json({
        status: 'Success',
        message: 'Food detail data get succesful',
        data: food
    })
}

module.exports = { getAllFoodHandler, getFoodByIdHandler }