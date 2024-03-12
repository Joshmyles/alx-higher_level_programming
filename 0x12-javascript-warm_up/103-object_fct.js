#!/usr/bin/node

function incrementAndCall (number, theFunction) {
  const incr = num => num + 1;
  const incrementedNumber = incr(number);
  theFunction(incrementedNumber);
}

module.exports = incrementAndCall;
