const Engineer = require("../lib/Engineer");

describe("github", () => {
    it("set github via constructor",()=>{
        const testValue = "GitHubUser";
        const e = new Engineer("Ruperto", 1, "test@test.com", testValue);
        expect(e.github).toBe(testValue);
    })
  
});

describe("role", () => {
    it("grtRole() return engineer",()=>{
        const testValue = "Engineer";
        const e = new Engineer("Ruperto", 1, "test@test.com", "GitHubUser");
        expect(e.getRole()).toBe(testValue);
    })
 
});

describe("get github", () => {
    it("getGithub()",()=>{
        const testValue = "GitHubUser";
        const e = new Engineer("Ruperto", 1, "test@test.com", testValue);
        expect(e.getGithub()).toBe(testValue);
    })
  
});