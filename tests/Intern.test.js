const Intern = require("../lib/Intern");

describe("school", () => {
    it("set school via constructor",()=>{
        const testValue = "UNAM";
        const e = new Intern("Ruperto", 1, "test@test.com", testValue);
        expect(e.school).toBe(testValue);
    })
  
});

describe("role", () => {
    it("getRole()",()=>{
        const testValue = "Intern";
        const e = new Intern("Ruperto", 1, "test@test.com", "UNAM");
        expect(e.getRole()).toBe(testValue);
    })
 
});

describe("get school", () => {
    it("getSchool()",()=>{
        const testValue = "UNAM";
        const e = new Intern("Ruperto", 1, "test@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    })
 
});