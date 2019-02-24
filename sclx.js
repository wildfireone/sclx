var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//var LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
var lane2 = new Gpio(4, 'in', 'both'); //usxe GPIO pin 17 as input, and 'b$
var lane1 = new Gpio(17, 'in', 'both');
var count=0;

lane1.watch(function (err, value) { //Watch for hardware interrupts on pus$
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  console.log("lane1 "+value) //turn LED on or off depending on the butt$
});

lane2.watch(function (err, value) { //Watch for hardware interrupts on pus$
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  console.log("lane2 "+value) //turn LED on or off depending on the butt$
});

function unexportOnClose() { //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using$
