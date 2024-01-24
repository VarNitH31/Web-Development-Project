const pages = [
    { name: "Home", url: "home.html" },
    { name: "About", url: "about.html" },
    { name: "Contact", url: "contact.html" },
    { name: "Asus zephrus", url: "/productpages/asuszephurs.html" },
    { name: "Asus zephrus1", url: "/productpages/asuszephurs.html" },
    { name: "Asus zephrus2", url: "/productpages/asuszephurs.html" },
    { name: "Asus zephrus3", url: "/productpages/asuszephurs.html" },
    { name: "Asus zephrus4", url: "/productpages/asuszephurs.html" },
    { name: "Asus zephrus5", url: "/productpages/asuszephurs.html" },
    // Add more pages as needed
];

const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

searchBar.addEventListener('input', function () {
    const query = searchBar.value.toLowerCase();
    const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
    displayResults(filteredPages);
});

searchBar.addEventListener('focus', function () {
    const query = searchBar.value.toLowerCase();
    const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
    displayResults(filteredPages);
});

document.addEventListener('click', function (event) {
    if (event.target !== searchBar && event.target !== searchResults) {
        searchResults.style.display = 'none';
    }
});

function displayResults(results) {
    searchResults.innerHTML = '';

    if (searchBar.value.trim() === '') {
        searchResults.style.display = 'none';
        return;
    }

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name;
        listItem.addEventListener('click', () => redirectToPage(result.url));
        searchResults.appendChild(listItem);
    });

    if (results.length > 0) {
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}

function redirectToPage(url) {
    window.location.href = url;
}