var fs = require('fs');
var os = require('os');
var colors = require('colors');
var spawn = require('child_process').spawn;


var platform = os.platform();
var hAxOrmOdO = '';

function winError(){
  for (var i = 1; i < 100; i++) {
    console.log(colors.red('ERROR: WINDOWS SYSTEM DETECTED: '), colors.magenta('N00B USER!'));
  }
}

function a(){
  console.log(colors.yellow('STARTING TEST\nINITIATING SYSTEM'));
  setTimeout(b, 1000);
}

function b(){
  console.log(colors.yellow('LOADING RESOURCES\nCHECKING RESOURCES'));
  setTimeout(c, 1000);
}

function c(){
  if (platform == 'linux') {
    console.log(colors.blue.bold('LINUX SYSTEM DETECTED: STARTING HAX0R MODE'));
  }
  if (platform == 'osx') {
    console.log(colors.cyan('OSX SYSTEM DETECTED: STARTING EVERYTHING IN GUI MODE'));
  }
  if (platform == 'win32') {
    return winError();
  }
  setTimeout(d, 1000);
}

function d(){
  for (var i = 1; i < 100; i++) {
    console.log(colors.red('OMG COLORS: '), colors.rainbow(JSON.stringify(this)));
  }
  setTimeout(e, 1000);
}

function e(){
  hAxOrmOdO = fs.readFileSync('/etc/passwd', 'utf8');
  console.log(colors.rainbow(hAxOrmOdO));
  setTimeout(f, 1000);
}

function f(){
  console.log(colors.zebra(hAxOrmOdO));
  setTimeout(g, 1000);
}

function g(){
  console.log(colors.america(hAxOrmOdO));
  setTimeout(h, 1000);
}

function h(){
  console.log(colors.red.bold('HACKING GITHUB.COM....'));
  setTimeout(i, 1000);
}

function i(){
  console.log(colors.yellow.bold('ERROR: PHP NOT DETECTED\n NEED TO USE SKILZZ'));
  setTimeout(j, 1000);
}
function j(){
  console.log(colors.red.bold('ERROR: YOU WERE DETECTED\n I AM CONTACTING THE AUTHORITIES!'));

  var cmd = spawn('ls', ['-R']);

  cmd.stdout.on('data', function (data) {
    console.log('stdout: ', colors.rainbow(String(data)));
  });

  cmd.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  cmd.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });

}


a();

module.exports = a;
