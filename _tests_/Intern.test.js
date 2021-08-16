const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it("Should have a school name passed in that can be pulled out", () => {
        expect(new Intern('Joe', 5, 'joe@name.com','UCSD').getSchool()).toBe('UCSD');
    });
    it("Should return the title Intern when getRole is run", () => {
        expect(new Intern('Joe', 5, 'joe@name.com','UCSD').getRole()).toBe('Intern');
    });

})