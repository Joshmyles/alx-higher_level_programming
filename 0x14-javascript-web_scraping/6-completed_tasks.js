#!/usr/bin/node

// a script that computes the number of tasks completed by user id
// the first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// only print users with completed task
// you must use the module request

const request = require('request');
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const tasks = JSON.parse(body);
    const completed = {};
    for (const index in tasks) {
      const task = tasks[index];
      if (task.completed === true) {
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } else {
          completed[task.userId]++;
        }
      }
    }
    console.log(completed);
  } else {
    console.log('Error : ' + response.statusCode);
  }
});
