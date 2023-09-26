// 0-promise.js

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call, for example:
    setTimeout(() => {
      const data = { message: 'API response data' };
      // Simulate a successful response
      resolve(data);
      // Simulate an error response
      // reject(new Error('API request failed'));
    }, 1000); // Simulating a 1-second delay, replace with your actual API call
  });
}

