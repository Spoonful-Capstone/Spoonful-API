const { prisma } = require("../prisma")
const bcrypt = require('bcrypt')

async function registerUserHandler(req, res) {
    const { username, email, password, weight, age } = req.body

    if (!username || !email || !password || !weight) {
        return res.status(400).json({ status: 'Failed', error: 'Username, email, password, or weight is not provided' });
    }


    try {
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await prisma.user.create({
            data: {
                email: email,
                name: username,
                password: hashedPassword,
                weight: weight,
                age: age,
            }
        })

        res.status(201).json({
            status: 'Success',
            message: 'User register successful',
            data: user
        });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400)
            return res.json({
                status: 'Failed',
                message: 'Email has been taken, please select another email'
            })
        }
        console.error(error.message);
        res.status(400)
        return res.json({
            status: 'Failed',
            message: 'Unknown error'
        })
    }
}


async function editUserHandler(req, res) {
    const { age, weight, eat_per_day, goal, food_category, nutritions } = req.body;
    // const { carbohidrate, protein, calories } = nutritions
    const { userId } = req.params

    if (!age && !weight && !eat_per_day && !goal && !food_category && !nutritions) {
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