//task 2

//globalVariables
let machineAI = 0;
let machineBI = 2;
let machineCI = 1;

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
let MachineA = new Machine ('Machine A');
let MachineB = new Machine ('Machine B');
let MachineC = new Machine ('Machine C');



//______OBSERVER CONSTRUCTOR______
class Observer {
    constructor(name){
        this.name = name;
    }

    update(state, fromMachine){
        console.log(`${this.name}, ${this.role}, ${state}, ${fromMachine}`);
    }
}

//______DASHBOARD EXTENSION______
class DASHBOARD extends Observer {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}


//______TIMED SET STATE______
function timeSetState(){
  let states = ['IDLE', 'PRODUCING', 'STARVED'];

  MachineA.setState(states[machineAI]);
  document.getElementById("machA").className = states[machineAI];
  document.getElementById("machA").innerHTML = states[machineAI];
  machineAI++;

  MachineA.setState(states[machineBI]);
  document.getElementById("machB").className = states[machineBI];
  document.getElementById("machB").innerHTML = states[machineBI];
  machineBI++;

  MachineA.setState(states[machineCI]);
  document.getElementById("machC").className = states[machineCI];
  document.getElementById("machC").innerHTML = states[machineCI];
  machineCI++;

  if (machineAI > 2){
      machineAI = 0;
    }

  if (machineBI > 2){
      machineBI = 0;
    }

  if (machineCI > 2){
      machineCI = 0;
    }

    
}


setInterval(timeSetState, 2000);
