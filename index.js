const DEBUG = process.env['verbose'] || false;

log("Running in debug mode");

function log(s){
  if(DEBUG)
    console.log(s);
}

class System{
  constructor(conf = {}){
    this.tasks = {};
  }

  register(task){
    log(task.name);
    this.tasks[task.name] = new task(this);
  }

  ask(task_name){
    let task = this.tasks[task_name];
    if(typeof task != 'undefined'){
      // task = new task();
      return task.run();
    } else {
      throw new Error(`Task ${task_name} was not found.`);
    }
  }
}

class Task {
  constructor(system){
    this.system = system;
  }

  ask(){
    return this.system.ask.apply(this.system, arguments);
  }

  async run(){
    log(`[LOG][ReASK] Task ${this.constructor.name} was runned.`);
    if (typeof this.do != 'undefined')
      return this.do();
    else
      return None;
  }
}

exports.System = System;
exports.Task = Task;
