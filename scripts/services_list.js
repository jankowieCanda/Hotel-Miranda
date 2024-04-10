const servicesList = [
    'Restaurant & Bar',
    'Swimming Pool',
    'Wellness & Spa',
    'Restaurant', 
    'Conference Room',
    'Cocktail Party House',
    'Gaming Zone',
    'Marriage Party',
    'Party Planning',
    'Tour Consultancy'
]
const list = document.getElementById('services_list');

window.addEventListener('load', () => {
    servicesList.forEach((service) => 
        list.innerHTML += `<li>${service}</li>`
    )
})