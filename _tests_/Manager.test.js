const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it("Should have an office number passed in that can be pulled out", () => {
        expect(new Manager('Joe', 5, 'joe@name.com','619-867-5309').getOfficeNumber()).toBe('619-867-5309');
    });
    it("Should return the title Manager when getRole is run", () => {
        expect(new Manager('Joe', 5, 'joe@name.com','619-867-5309').getRole()).toBe('Manager');
    });

})