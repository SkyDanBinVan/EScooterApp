const EScooter = require("./EScooter")
const ChargingStation = require("./ChargingStation")
const User = require("./User")

let  Windsor = [new ChargingStation("north", 10),
    new ChargingStation("east", 10),
    new ChargingStation("south", 10),
    new ChargingStation("west", 10)
]
let  Scooter1 = [
    new EScooter(1, Windsor[0]),
    new EScooter(2, Windsor[1]),
    new EScooter(3, Windsor[0]),
    new EScooter(4, Windsor[0]),
    new EScooter(5, Windsor[2]),
    new EScooter(6, Windsor[2]),
    new EScooter(7, Windsor[1]),
    new EScooter(8, Windsor[0])
]
let user1 = new User("Daniel")

console.log(user1)
console.log(Windsor[1])
Windsor[1].release(Scooter1[4], user1)

console.log(Windsor[1])

console.log(user1)

Windsor[3].dock(user1)

console.log(Windsor[3])

console.log(user1.isActive())

Windsor[3].move(Scooter1[6], Windsor[1])

console.log(Windsor[1])

console.log(Windsor[3])



