document.addEventListener('DOMContentLoaded', function() {
    // Fetch taxi stations data from the backend
    fetch('/api/taxi-stations')
        .then(response => response.json())
        .then(data => {
            displayTaxiStations(data);
        })
        .catch(error => {
            console.error('Error fetching taxi stations:', error);
        });

    // Function to display taxi stations
    function displayTaxiStations(taxiStations) {
        const taxiRanksContainer = document.getElementById('taxiRanks');
        taxiRanksContainer.innerHTML = ''; // Clear previous content

        // Add heading
        const heading = document.createElement('h2');
        heading.textContent = 'Taxi Ranks';
        taxiRanksContainer.appendChild(heading);

        // Add search bar
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search destination...';
        taxiRanksContainer.appendChild(searchInput);

        // Add event listener for search input
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredTaxiStations = taxiStations.filter(station =>
                station.destinations.includes(searchTerm)
            );
            displayFilteredTaxiStations(filteredTaxiStations);
        });

        // Function to display filtered taxi stations
        function displayFilteredTaxiStations(filteredTaxiStations) {
            const taxiStationsList = document.createElement('ul');
            if (filteredTaxiStations.length > 0) {
                filteredTaxiStations.forEach(station => {
                    const listItem = document.createElement('li');
                    listItem.textContent = station.name + ' - ' + station.location;
                    taxiStationsList.appendChild(listItem);
                });
            } else {
                const noResultItem = document.createElement('li');
                noResultItem.textContent = 'No taxi stations found for this destination';
                taxiStationsList.appendChild(noResultItem);
            }
            taxiRanksContainer.appendChild(taxiStationsList);
        }

        // Display all taxi stations initially
        displayFilteredTaxiStations(taxiStations);
    }
});
