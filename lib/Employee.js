// This is the parent class
//name, ID, email, getName(), getID(), getEmail(), getRole(Returns 'Employee')
//Add validation when puting input

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
