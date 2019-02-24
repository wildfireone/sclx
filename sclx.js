var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//var LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
var lane2 = new Gpio(4, 'in', 'both'); //usxe GPIO pin 17 as input, and 'b$
var lane1 = new Gpio(17, 'in', 'both');
var count = 0;



const request = require('request');



lane1.watch(function(err, value) { //Watch for hardware interrupts on pus$
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
    return;
  }
  console.log("lane1 " + value) //turn LED on or off depending on the butt$
  request('htt://10.85.9.9:5000/lanedata?lane=lane1&value='+value, {
    json: true
  }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    //console.log(body.url);
    //console.log(body.explanation);
  });
});

lane2.watch(function(err, value) { //Watch for hardware interrupts on pus$
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
    return;
  }
  console.log("lane2 " + value) //turn LED on or off depending on the butt$
  request('http://10.85.9.9:5000/lanedata?lane=lane1&value='+value, {
    json: true
  }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    //console.log(body.url);
    //console.log(body.explanation);
  });
});

function unexportOnClose() { //function to run when exiting program

  lane1.unexport(); // Unexport Button GPIO to free resources
  lane2.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using$
