const db = require('./models')
const dateCount = require('./dateCount')

async function calculateStreak(taco, todaysDate) {
    try {
        // Get all habit responses that are true
        const findHabresponse = await db.habresponse.findAll({
            where: {
                habitId: taco,
                response: true
            }, order: [
                ['date', 'DESC']
            ]
        })
        // convert dates to integers using dateCount and store them in an array
        const responseDateArray = findHabresponse.map(response => {
            return dateCount.dateCountInt(response.date)
        })
        console.log(responseDateArray)
        let nextUp = responseDateArray[1]
        let streak = 0
        const todaysDateCount = dateCount.dateCountInt(todaysDate)
        console.log(todaysDateCount, responseDateArray[0])
        if (todaysDateCount === responseDateArray[0] || (todaysDateCount - 1)=== responseDateArray[0]) {
            streak ++
        }
        responseDateArray.forEach((day, i) => {
            if (day === (responseDateArray[i+1] + 1)) {
                streak ++
            } 
        })
        console.log(streak)
        // update habit.current_streak with that amount 
        const findHabit = await db.habit.findOne ({
            where: {
                id: taco
            }
        })
        await findHabit.update({
            streak: streak
        })
    } catch(error) {
        console.log(error)
    }
}

calculateStreak(1, '2023-04-12')