const Employee = require("./Employee");

class Intern extends Employee{
    constructor(email, name, id, school){
        super(email, name, id);
        this.school=school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "intern"
    }
}
module.exports=Intern