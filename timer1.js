//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments.

//Alarm sound
//process.stdout.write('\x07');

//Edge cases
//No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


let numbers = [];
for (let i = 2; i < process.argv.length; i++) {
  const num = parseInt(process.argv[i]);
  if (!isNaN(num) && num >= 0) {
    numbers.push(num);
  }
}

let alteredNumbers = [];
for (const num of numbers) {
  alteredNumbers.push(num * 1000);
}

for (const number of alteredNumbers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, number);
}