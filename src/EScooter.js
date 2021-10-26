class EScooter {
    static allEScooters = []
    constructor(id, station) {
        this.id = id
        this.batterypercent = 100
        this.damaged = false
        station.charge(this)
        this.constructor.allEScooters.push(this)
    };
    chargetime = () => {
        let battery = this.batterypercent
        let time = -50*(battery)+5000
        return time
    };
    use = (amount) => {
        this.batterypercent = 100 - amount
    };
    damage = () => {
        this.damaged = true
    }
};

module.exports = EScooter