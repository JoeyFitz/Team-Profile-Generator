const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it("Should have a GitHub profile name passed in that can be pulled out", () => {
        expect(new Engineer('Joe', 5, 'joe@name.com','JoeyFitz').getGithub()).toBe('JoeyFitz');
    });
    it("Should return the title Engineer when getRole is run", () => {
        expect(new Engineer('Joe', 5, 'joe@name.com','JoeyFitz').getRole()).toBe('Engineer');
    });

})