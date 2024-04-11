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
];
const amenitiesList = ['Air conditioner', 'Breakfast', 'Cleaning', 'Grocery', 'Shop near', '24/7 Online Support', 'Smart Security', 'High speed WiFi', 'Kitchen', 'Shower', 'Single bed', 'Towels', 'Strong Locker', 'Expert Team'];
const amenitiesIcons = ['../img/roomDetail/airconditioner_icon.svg', '../img/roomDetail/breakfast_icon.svg', '../img/roomDetail/cleaning_icon.svg', '../img/roomDetail/grocery_icon.svg', '../img/roomDetail/shop_near_icon.svg', '../img/roomDetail/online_support_icon.svg', '../img/roomDetail/security_icon.svg', '../img/roomDetail/wifi_icon.svg', '../img/roomDetail/kitchen_icon.svg', '../img/roomDetail/shower_icon.svg', '../img/roomDetail/single_bed_icon.svg', '../img/roomDetail/towel_icon.svg', '../img/roomDetail/locker_icon.svg', '../img/roomDetail/expert_team_icon.svg'];

const services = document.getElementById('services_list');
const amenities = document.getElementById('amenities_list');

window.addEventListener('load', () => {
    servicesList.forEach((service) => services.innerHTML += `<li>${service}</li>`)

    amenitiesList.forEach((amenitie, i) => {
        amenities.innerHTML += `
            <li>
                <img src=${amenitiesIcons[i]} alt="icon"/>
                ${amenitie}
            </li>`
    })

})