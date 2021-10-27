const ChargingStation = require("../src/ChargingStation");
const EScooter = require("../src/EScooter");
const User = require("../src/User")

let StationN = new ChargingStation("North", 10)
let StationS = new ChargingStation("South", 10)

let EScooter1 = new EScooter(1, StationN)
let EScooter2 = new EScooter(2, StationS)
let EScooter3 = new EScooter(3, StationN)

let newUser = new User("Daniel")

EScooter1.use(50)

describe("Charging Station", () => {
    test("Should append Scooter", () => {
        let tstation = new ChargingStation("tempst", 10)
        let temp = new EScooter(5, tstation)
        expect(tstation.scooters).toEqual([temp])
    })
})

describe("E-Scooter", () => {
    test("", () => {

    })
})

describe("User", () => {
    test("", () => {

    })
})