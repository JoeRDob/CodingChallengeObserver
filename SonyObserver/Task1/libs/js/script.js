//task 1

//______SUBJECT CONSTRUCTOR______
class Subject {
    constructor() {
      this.observers = [];
      this.state = 'IDLE'; //Default state is idle
      
    }

    setState(s){
      this.state = s;
      this.notifyAllObservers();
    }
  
    attach(o) {
      this.observers.push(o);
    }
  
    notifyAllObservers() {
      this.observers.forEach(observer => observer.update(this.state, this.name));
    } 
  }


//______MACHINES EXTENSION______
class Machine extends Subject {
    constructor(name){
        super();
        this.name = name;
    }
}


//______MACHINES______
let RaspPI = new Machine ('RaspPILine');
let Camera = new Machine ('CameraLine');
let TV = new Machine ('TVLine');



//______OBSERVER CONSTRUCTOR______
class Observer {
    constructor(name){
        this.name = name;
    }

    update(state, fromMachine){
        console.log(`${this.name}, ${this.role}, ${state}, ${fromMachine}`);
    }
}

//______EMPLOYEE EXTENSION______
class Employee extends Observer {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

//______EMPLOYEES______
johnSmith = new Employee("John Smith", "Operator");
janeWilliams = new Employee("Jane Williams", "Team Leader");
adamBlack = new Employee("Adam Black", "Maintenance");
frankWing = new Employee("Frank Wing", "Process Control");
drewLloyd = new Employee("Drew Lloyd", "Engineering");


//______ATTACH EMPLOYEES TO MACHINES_______
RaspPI.attach(johnSmith);
RaspPI.attach(janeWilliams);
RaspPI.attach(adamBlack);
Camera.attach(frankWing);
TV.attach(drewLloyd);


//______SET STATES______
RaspPI.setState('PRODUCING');
Camera.setState('STARVED');
TV.setState('IDLE');



  