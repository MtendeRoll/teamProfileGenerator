// This is the parent class
//name, ID, email, getName(), getID(), getEmail(), getRole(Returns 'Employee')
//Add validation when puting input

class Employee {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  //getID() {}

  //getEmail() {}

  getRole() {
    return Employee;
  }
}
module.exports = Employee;
