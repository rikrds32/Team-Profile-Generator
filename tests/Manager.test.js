const Manager = require("../lib/Manager");

describe("office number", () => {
    it("set office number via constructor arguments",()=>{
        const testValue = 100;
        const e = new Manager("Ruperto", 1, "test@test.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    })
 
});

describe('role', () => {
    it("getRole()",()=>{
        const testValue = "Manager";
        const e = new Manager("Ruperto", 1, "test@test.com", 100);
        expect(e.getRole()).toBe(testValue);
    })
  
});

describe("get office number", () => {
    it("getOfficeNumber()",()=>{
        const testValue = 100;
        const e = new Manager("Ruperto", 1, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    })
 
});