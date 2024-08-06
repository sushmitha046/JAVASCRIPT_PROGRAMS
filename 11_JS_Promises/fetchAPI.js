
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) 
  .then(data => {
    
    console.log(data)
  })
  .catch(error => console.error('Fetch error:', error)); 
const fetchData = async () => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const countries = await response.json();

    
    console.log(countries);
  } catch (err) {
    console.error('Fetch error:', err);
  }
};

console.log('===== async and await =====');
fetchData();


const square = async function (n) {
  return n * n;
};


square(2)
  .then(value => console.log(`Square of 2: ${value}`))
  .catch(error => console.error('Error:', error));
