const ChargingStation = require("../src/ChargingStation");
const EScooter = require("../src/EScooter");
const User = require("../src/User")



describe("Charging Station", () => {
    test("Should charge scooter to 100", () => {
        expect(Windsor.charge(Scooter1)).toBe("string")
    })
})