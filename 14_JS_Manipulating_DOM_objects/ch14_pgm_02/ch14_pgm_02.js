
const countries = ['Afghanistan','Bangladesh', 'Barbados', 'Belarus', 'Belgium','Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'India'];
const countriesList = document.getElementById('countries-list');

countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    countriesList.appendChild(li);
});
