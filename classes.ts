// Modifier protected allow to use methods only inside the same classes and their children
// Modifier private allow to use method only inside of same class
// Modifier public is by default.

class Machine {
  protected honk(): void {
    console.log('beep');
  }

  // color: string = 'red';
  // color: string;
  constructor(public color: string) {
    // this.color = color;
  }
}

class Robot extends Machine {
  constructor(wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const machine = new Machine('blue');

// machine.honk();

const robot = new Robot(4, 'red');
robot.startDrivingProcess();
// robot.honk();
