// Create Charging Station class.
class ChargingStation {
    // Static attribute keeps track of all class instances.
    static allStations = []
    // Charging Station instance has a name, maximum capacity of scooters and array of scooters docked.
    constructor(name, maxCapacity) {
        this.name = name
        this.maxCapacity = maxCapacity
        this.scooters = []
        this.constructor.allStations.push(this)
    };
    // Charge method docks scooter.
    charge = async (scooter) => {
        this.scooters.push(scooter)
        // Checks battery %
        if (scooter.batterypercent == 100) {
            return
        }
        // If % < 100 timer is set off and scooter is charged.
        else {
            let time = scooter.chargetime(scooter)
            console.log('Starting charge');
            await new Promise(resolve => setTimeout(resolve, time));
            scooter.batterypercent = 100
            console.log('Charge complete');
        };
    };
    // Release method appends scooter to user.
    release = (scooter, user) => {
        // If User object has a scooter, release is thrown.
        if (user.userScooter !== undefined) {
            throw "User already has scooter"
        }
        // If Scooter object is not done charging, release is thrown.
        else if (scooter.batterypercent !== 100) {
            throw "Scooter not charged"
        }
        // If Scooter object is damaged, release is thrown.
        else if (scooter.damaged == true) {
            throw "Scooter damaged"
        }
        // Else removes scooter from Charging Station object and appends to User object.
        else {
            user.userScooter = this.scooters.splice(this.scooters.indexOf(this.scooters.find(element => element.id == scooter.id)), 1)[0]
        };
        
    };
    // Dock method removes scooter being used from User object and calls charge() method to append and charge Scooter object.
    dock = (user) => {
        this.charge(user.userScooter)
        user.userScooter = undefined
    }
    // Move method moves a Scooter object from one Charging Station object to another.
    move = (scooter, station) => {
        station.scooters.push(this.scooters.splice(this.scooters.indexOf(this.scooters.find(element => element.id == scooter.id)), 1)[0])
    }
};
// Export Charging Station class.
module.exports = ChargingStation