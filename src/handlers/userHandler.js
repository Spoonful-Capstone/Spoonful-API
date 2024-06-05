const { prisma } = require("../prisma")
const jwt = require('jsonwebtoken');

async function registerUserHandler(req, res) {
    const { usernameInput, emailInput, passwordInput } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ status: 'Failed', error: 'Username, email, or password is not provided' });
    }

    const user = await prisma.user.create({
        email: emailInput,
        name: usernameInput,
        password: passwordInput
    })

    res.status(200).json({
        status: 'Success',
        data: user
    });
}


async function editUserHandler(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            status: 'Failed',
            message: 'User is not authenticated'
        });
    }

    let userId;
    const token = authHeader.split(' ')[1];

    try {
        const decodedJWT = jwt.verify(token, 'your_jwt_secret_key');
        userId = decodedJWT.id;
    } catch (err) {
        return res.status(403).json({
            status: 'Failed',
            message: 'User is not authenticated'
        });
    }

    const { age, weight, eat_per_day, goal, food_category, nutritions } = req.body;
    const { karbohidrat, protein, kalori } = nutritions

    if (!age && !weight && !eat_per_day && !goal && !food_category && (!nutritions || !karbohidrat && !protein && !kalori)) {
        return res.status(400).json({
            status: 'Failed',
            message: 'Please provide value to change'
        });
    }


    const updatedUser = await prisma.user.update({
        where: { ID: userId },
        data: {
            age,
            weight,
            eat_per_day,
            goal,
            food_category,
            nutritions
        }
    });

    res.status(200).json({
        status: 'Success',
        message: 'User data has been successfully changed',
        data: updatedUser
    });
}


module.exports = { registerUserHandler, editUserHandler }