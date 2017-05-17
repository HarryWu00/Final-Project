const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
    if motion
      +  which variable are you solving for? (options: d, v, t, or a)
    -  else if energy
      +  which variable are you solving for? (options: ke, m, or v)
    -  else
      +  I'm sorry I don't know how to calculate that yet...
    //you will configure your series of questions inside here.


});
