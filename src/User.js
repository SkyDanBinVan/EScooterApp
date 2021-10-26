class User {
    // Static attribute keeps track of all class instances.
    static allUsers = []
    // User instance has name and allocated scooter.
    constructor(name) {
        this.name = name
        this.userScooter = undefined
        this.constructor.allUsers.push(this)
    };
    // IsActive method returns string confirming current usage of scooter.
    isActive() {
        if (this.userScooter !== undefined) {
            return `Yes, ${this.name} is using scooter id:${this.userScooter.id}`
        }
        else {
            return 'No'
        };
    };
};
// Exports User class.
module.exports = User