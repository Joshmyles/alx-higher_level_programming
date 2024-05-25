#!/usr/bin/node

const x = 3;
function executeXTimes (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

module.exports = executeXTimes;
