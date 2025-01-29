# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Unhandled rejections can lead to application crashes and unexpected behavior, making them difficult to debug.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file provides a corrected version with proper error handling.

## Problem

The original code uses a promise-based asynchronous operation within a route handler, but lacks proper error handling. If the asynchronous operation fails, the promise rejection is unhandled, leading to an unhandled promise rejection warning (or even a crash depending on the environment).

## Solution

The solution involves adding a `.catch` block to handle any potential errors from the asynchronous operation.  This ensures that the application gracefully handles failures and prevents unhandled rejections.