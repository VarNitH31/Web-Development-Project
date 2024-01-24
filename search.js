const pages = [
    { name: "Home", url: "home.html" },
    { name: "About", url: "about.html" },
    { name: "Contact", url: "contact.html" },
    { name: "Asus zephrus", url: "/productpages/asuszephurs.html" },
    {
        name:"Iphone 14",
        url: "/productpages/iphone14.html"
    },
    {

        name:"Oneplus 11R 5G",
        url: "/productpages/oneplus11r.html"

    },
    {
  
        name:"Galaxy Z Fold 4",
        url: "/productpages/galaxyZfold.html"

    },

    {

        name:"Pavillion x360",
        url: "/productpages/pavillionx360.html"

    },
    {

        name:"Dell Alienware M15",
        url: "/productpages/dellalienware.html"

    },
    {

        name:"Macbook air M2",
        url: "/productpages/macbook.html"

    },
    {

        name:"Boat rockerz 450",
        url: "/productpages/boatheadphones.html"

    },
    {

        name:"zebronics thunderbolt",
        url: "/productpages/zebronics.html"

    },
    {

        name:"Noise buds vs104",
        url: "/productpages/noise.html"

    },
    {

        name:"Pebble Cosmos prime",
        url: "/productpages/pebble.html"

    },
    {

        name:"Fastrack FS1 pro",
        url: "/productpages/fastrack.html"

    }
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