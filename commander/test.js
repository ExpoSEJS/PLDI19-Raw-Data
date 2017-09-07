// Require your NPM library
var target = require('commander');

function range(val) {
  return val.split('..').map(Number);
}
 
function list(val) {
  return val.split(',');
}
 
function collect(val, memo) {
  memo.push(val);
  return memo;
}
 
function increaseVerbosity(v, total) {
  return total + 1;
}

function SymbolicArray() {
	var x = symbolic Switch initial 0;
	assume x < 3;
	var array = [process.argv[0], process.argv[0]];
	for (var i = 0; i < x; i++) {
		array.push(symbolic Arg initial '');
	}
	return array;
}

target
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-f, --float <n>', 'A float argument', parseFloat)
  .option('-r, --range <a>..<b>', 'A range', range)
  .option('-l, --list <items>', 'A list', list)
  .option('-o, --optional [value]', 'An optional value')
  .option('-c, --collect [value]', 'A repeatable value', collect, [])
  .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
  .parse(SymbolicArray());