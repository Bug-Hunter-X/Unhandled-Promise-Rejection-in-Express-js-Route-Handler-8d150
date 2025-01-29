const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling missing, leading to unhandled promise rejections
    console.error('Error:', error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that may fail
  return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}