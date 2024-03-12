#!/usr/bin/node

const args = process.argv.slice(2).map(Number);

for (let i = 0; i < args.length; i++) {
  if (args[i] === 12) {
    args[i] = 89;
  }
}

console.log(args);
