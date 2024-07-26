// Simulate a simple user database with one registered member
const registeredUsers = [
    {
        username: 'Marine',
        password: 'Lucy'
    }
];

// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get username and password values from the form
    const username = document.getElementById('username-email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate the credentials
    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to homepage or user dashboard
        window.location.href = 'index.html'; // Modify this as needed
    } else {
        alert('Invalid username or password.');
    }
}

// Add event listener to login form
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Sample ads data
const ads = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Ad ${i + 1}`,
    description: `Description for ad ${i + 1}`,
}));

const adsPerPage = 10;
let currentPage = 1;

function displayAds(page) {
    const start = (page - 1) * adsPerPage;
    const end = start + adsPerPage;
    const paginatedAds = ads.slice(start, end);

    const adContainer = document.querySelector('.ad-container');
    adContainer.innerHTML = '';

    paginatedAds.forEach(ad => {
        const adDiv = document.createElement('div');
        adDiv.className = 'ad';
        adDiv.innerHTML = `
            <h2>${ad.title}</h2>
            <p>${ad.description}</p>
            <button onclick="handleClick(${ad.id})">Click Here</button>
        `;
        adContainer.appendChild(adDiv);
    });
}

function displayPagination() {
    const pageCount = Math.ceil(ads.length / adsPerPage);
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = () => {
            currentPage = i;
            displayAds(currentPage);
        };
        pagination.appendChild(button);
    }
}

function handleClick(adId) {
    // Implement click handling logic
    alert(`Clicked on ad ${adId}`);
}

document.addEventListener('DOMContentLoaded', () => {
    displayAds(currentPage);
    displayPagination();
});


