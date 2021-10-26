class ChargingStation {
    static allStations = []
    constructor(name, maxCapacity) {
        this.name = name
        this.maxCapacity = maxCapacity
        this.scooters = []
        this.constructor.allStations.push(this)
    };
    charge = async (scooter) => {
        this.scooters.push(scooter)
        if (scooter.batterypercent == 100) {
            return
        }
        else {
            let time = scooter.chargetime(scooter)
            console.log('Starting charge');
            await new Promise(resolve => setTimeout(resolve, time));
            scooter.batterypercent = 100
            console.log('Charge complete');
        };
    };
    release = (scooter, user) => {
        if (user.userScooter !== undefined) {
            throw "User already has scooter"
        }
        else if (scooter.batterypercent !== 100) {
            throw "Scooter not charged"
        }
        else if (scooter.damaged == true) {
            throw "Scooter damaged"
        }
        else {
            user.userScooter = this.scooters.splice(this.scooters.indexOf(this.scooters.find(element => element.id == scooter.id)), 1)[0]
        };
        
    };
    dock = (user) => {
        this.charge(user.userScooter)
        user.userScooter = undefined
    }
    move = (scooter, station) => {
        station.scooters.push(this.scooters.splice(this.scooters.indexOf(this.scooters.find(element => element.id == scooter.id)), 1)[0])
    }
};

module.exports = ChargingStation