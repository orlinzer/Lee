const path = require('path');
const { spawn } = require('child_process');

process.chdir(path.join(__dirname, '..'));
console.log(process.cwd());

var npm = spawn('npm', ['i']);

process.chdir(path.join(process.cwd(), 'client'));
var npm = spawn('npm', ['i']);

process.chdir(path.join(process.cwd(), '..', 'server'));
var npm = spawn('npm', ['i']);

npm.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

npm.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

npm.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


