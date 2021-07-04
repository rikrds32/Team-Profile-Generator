const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(email, name, id, github){
        super(email, name, id);
        this.github=github;
    }
    getGithub(){
        return this.github;

    }
    getRole(){
        return "engineer";
    }
}
module.exports=Engineer