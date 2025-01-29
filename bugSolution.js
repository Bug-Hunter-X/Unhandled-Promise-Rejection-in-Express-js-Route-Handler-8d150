const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation with proper error handling
  someAsyncOperation().then(result => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error'); // Send error response
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