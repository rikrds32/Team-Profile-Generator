const Employee = require("../lib/Employee");

describe("employee class", () => {
    it("creates an instance of employee class",() => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    })
});

describe("name via constructor", () => {
    it("set name via constructor argument",()=>{
        const name = "Ruperto";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    })
 
});

describe("id via constructor", () => {
    it("set id via constructor argument",()=>{
        const testValue = 100;
        const e = new Employee("Ruperto", testValue);
        expect(e.id).toBe(testValue);
    })
 
});

describe("email via constructor", () => {
    it("set email via constructor argument",()=>{
        const testValue = "test@test.com";
        const e = new Employee("Ruperto", 1, testValue);
        expect(e.email).toBe(testValue);
    })
 
});

describe("name", () => {
    it("getName()",()=>{
        const testValue = "Ruperto";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue); 
    })

});

describe("is", () => {
    it("getID()",()=>{
        const testValue = 100;
        const e = new Employee("Ruperto", testValue);
        expect(e.getId()).toBe(testValue);
    })

});

describe("email", () => {
    it("getEmail()",()=>{
        const testValue = "test@test.com";
        const e = new Employee("Ruperto", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    })
  
});

describe("role", () => {
    it("getRole() returns employee",()=>{
        const testValue = "Employee";
        const e = new Employee("Ruperto", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    })
 
});