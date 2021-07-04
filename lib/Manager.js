const Employee = require("./Employee");

class Manager extends Employee{
    constructor(email, name, id, officeNumber){
        super(email, name , id);
        this.officeNumber=officeNumber;

    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "manager";
    }

}
module.exports=Manager