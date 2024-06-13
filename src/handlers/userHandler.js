const { prisma } = require("../prisma")

async function registerUserHandler(req, res) {
    const { name, email, password, weight, age, eatEachDay, foodPreference, goal } = req.body;

    if (!name || !email || !password || !weight || !age || !eatEachDay || !foodPreference || !goal) {
        return res.status(400).json({ status: 'Failed', error: 'Please fill all of the required fields' });
    }

    try {
        const result = await prisma.$transaction(async (prisma) => {
            let food_preference = await prisma.food_preference.findFirst({
                where: { name: foodPreference }
            });

            if (!food_preference) {
                food_preference = await prisma.food_preference.create({
                    data: { name: foodPreference }
                });
            }

            let goalData = await prisma.Goal.findFirst({
                where: { name: goal }
            });

            if (!goalData) {
                goalData = await prisma.Goal.create({
                    data: { name: goal }
                });
            }

            const user = await prisma.user.create({
                data: {
                    email,
                    name,
                    password,
                    weight,
                    age,
                    eatEachDay,
                    foodPreferenceId: food_preference.ID,
                    goalId: goalData.ID
                }
            });

            return { user, food_preference, goalData };
        });

        res.status(200).json({
            status: 'Success',
            data: result
        });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({
                status: 'Failed',
                message: 'Email has been taken, please select another email'
            });
        } else {
            console.error('Error:', error);
            res.status(500).json({ status: 'Failed', error: 'Failed to create user' });
        }
    }
}




async function editUserHandler(req, res) {
    const { name, email, password, weight, age, eatEachDay, foodPreference, goal } = req.body;
    const { userId } = req.params

    try {
        const foodPref = await prisma.food_preference.findFirst({
            where: { name: foodPreference }
        })

        if (!foodPref) {
            await prisma.food_preference.create({
                data: {
                    name: foodPreference
                }
            })
        }

        const goalPref = await prisma.Goal.findFirst({
            where: { name: goal }
        })

        if (!goalPref) {
            await prisma.Goal.create({
                data: {
                    name: goal
                }
            })
        }

        const updatedUser = await prisma.user.update({
            where: { ID: userId },
            data: {
                name,
                email,
                password,
                weight,
                age,
                eatEachDay,
                foodPreferenceId: foodPref.ID,
                goalId: goalPref.ID
            }
        });
        res.status(200).json({
            status: 'Success',
            message: 'User data has been successfully changed',
            data: updatedUser
        });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({
                status: 'Failed',
                message: 'Email has been taken, please select another email'
            })
        } else {
            console.error('Error:', error);
            res.status(500).json({ status: 'Failed', error: 'Failed to edit user information' });
        }
    }

}


async function getSpesificUserHandler(req, res) {
    const { userId } = req.params

    try {
        const User = await prisma.user.findFirst({
            where: {
                ID: userId
            },
            include: {
                food_preference: true,
                goal: true
            }
        })

        res.status(200).json({
            status: "success",
            message: "User Information successfully retrieve",
            data: {
                ID: User.ID,
                name: User.name,
                email: User.email,
                weight: User.weight,
                age: User.age,
                eatEachDay: User.eatEachDay,
                foodPreference: User.food_preference.name,
                goal: User.goal.name
            }
        })
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({
            status: 'Failed', error: 'Failed to retrieve user information'
        })
    }
}


module.exports = { registerUserHandler, editUserHandler, getSpesificUserHandler }