const { prisma } = require("../prisma");

async function getAllFoodHandler(req, res) {
    const all_foods = await prisma.food.findMany()

    if (!all_foods) {
        res.status(400)
        return res.json({
            status: 'Failed',
            message: 'Food data is empty'
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

    return res.json(id)
}

module.exports = { getAllFoodHandler, getFoodByIdHandler }