const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it("Should have a name passed in that can be pulled out", () => {
        expect(new Employee('joe', 5, 'joe@name.com').getName()).toBe('joe');
    });
    it("Should have an employee ID passed in that can be pulled out", () => {
        expect(new Employee('joe', 5, 'joe@name.com').getID()).toBe('5');
    });
    it("Should have an email address passed in that can be pulled out", () => {
        expect(new Employee('joe', 5, 'joe@name.com').getEmail()).toBe('joe@name.com');
    })
})

  