
const jsonData = { key1: 'value1', key2: 'value2' };

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
  };

fetch('http://localhost:3000/update', options)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });