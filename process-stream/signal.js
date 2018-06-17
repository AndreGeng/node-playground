process.stdin.resume();
process.on('SIGHUP', () => {
  console.log('reloading configuration...');
});

console.log('PID:', process.pid);
