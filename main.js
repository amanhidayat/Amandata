const QueueClass = require('./MExercise')

let queue = new QueueClass([
    "Queue 1",
    "Queue 2",
    "Queue 3",
    "Queue 4",
    "Queue 5",
    "Queue 6",
    "Queue 7",
    "Queue 8",
    "Queue 9",
    "Queue 10",
])

console.log(queue.data)
queue.run()