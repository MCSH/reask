# Reask

Reask is a dependecy handler built off of the idea behind [NeedJS](https://npm.org/needjs) by the same authors. It's main goal is to provide a task handling system over async interactions with possible server restarts in between.

## Features

* Async dependency handler
* Handle server restarts (Coming soon, based on NeedJS)
* More coming soon

## Example BMI Project

```
const Reask = require('reask');
const {Task, System} = Reask;

const sys = new System();

class BMI extends Task{
  async do(){
    let w = await this.ask('weight');
    let h = await this.ask('height');
    return w/h/h;
  }
}

class Weight extends Task{
  static name = "weight";
  
  async do(){
    // Somehow do
    return 90;
  }
}

class Height extends Task{
  async do(){
    return 180;
  }
}

sys.register(BMI);
sys.register(Weight);
sys.register(Height);

sys.ask('BMI');
```

More coming soon.
