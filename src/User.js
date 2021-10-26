class User {
    static allUsers = []
    constructor(name) {
        this.name = name
        this.userScooter = undefined
        this.constructor.allUsers.push(this)
    };
    isActive() {
        if (this.userScooter !== undefined) {
            return `Yes, ${this.name} is using scooter id:${this.userScooter.id}`
        }
        else {
            return 'No'
        };
    };
};

module.exports = User