// Create E-Scooter class.
class EScooter {
    // Static attribute keeps track of all class instances.
    static allEScooters = []
    // E-Scooter instance has id, battery percentage and damaged bool.
    constructor(id, station) {
        this.id = id
        this.batterypercent = 100
        this.damaged = false
        station.charge(this)
        this.constructor.allEScooters.push(this)
    };
    // Chargetime method uses a linear equation to calculate time taken to charge.
    chargetime = () => {
        let battery = this.batterypercent
        let time = -50*(battery)+5000
        return time
    };
    // Use method simulates battery usage.
    use = (amount) => {
        this.batterypercent = 100 - amount
    };
    // Damage method toggles damage bool.
    damage = () => {
        this.damaged = true
    }
};
// Exports E-Scooter class.
module.exports = EScooter