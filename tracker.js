var activeHabits = [
    {
        id: 1,
        title: 'habit',
        color: 'green',
        priority: '',
        startDate: '28.01.2021',
        endDate: '29.01.2021',
        result: [
            {
                date: '28.01.2021',
                status: 'success'
            },
            {
                date: '29.01.2021',
                status: 'failed'
            }
        ]
    }
]


// формирование задач на день
let dayPlan = []
habits.map((habit) => {
    if (1 = 1) {// если new Date() входит в промежуток между habit.startDate и habit.endDate
        dayPlan.push({
            title: habit.title,
            color: habit.color,
            priority: habit.priority,
            status: 'process'
        })
    } 
}) 

// создание привычки

let habit = {
    id: new Date().getTime(),
    title: '',
    color: '',
    priority: '',
    startDate: '',
    endDate: ''
}