const passengersData = {
    "P001": { name: "John Doe", flight: "F001" },
    "P002": { name: "Lucas Noah", flight: "F002" },
    "P003": { name: "Ray Son", flight: "F003" },
    "P004": { name: "Trey Murphy", flight: "F004" },
    "P005": { name: "Herb Jones", flight: "F005" },
    "P006": { name: "Emily Doherty", flight: "F006" },
    "P007": { name: "Megan Morgan", flight: "F007" },
    "P008": { name: "Penelope Garcia", flight: "F008" },
    "P009": { name: "Jennifer Jareau", flight: "F009" },
    "P010": { name: "Jane Smith", flight: "F010" }
};

const flightsData = {
    "F001": { airline: "Delta Airlines", departure: "2024-12-01 08:00:00", arrival: "2024-12-01 14:00:00", from: "John F. Kennedy International", to: "Los Angeles International" },
    "F002": { airline: "American Airlines", departure: "2024-12-02 10:00:00", arrival: "2024-12-02 18:00:00", from: "Heathrow", to: "Changi" },
    "F003": { airline: "United Airlines", departure: "2024-12-03 12:00:00", arrival: "2024-12-03 14:00:00", from: "Tokyo Narita", to: "Dubai International" },
    "F004": { airline: "Qatar Airways", departure: "2024-12-04 10:00:00", arrival: "2024-12-04 18:00:00", from: "Charles de Gaulle", to: "Sydney Kingsford Smith" },
    "F005": { airline: "Singapore Airlines", departure: "2024-12-05 06:00:00", arrival: "2024-12-05 08:00:00", from: "Frankfurt Airport", to: "Toronto Pearson" },
    "F006": { airline: "Japan Airlines", departure: "2024-12-06 10:00:00", arrival: "2024-12-06 13:00:00", from: "Toronto Pearson", to: "Frankfurt Airport" },
    "F007": { airline: "Southwest Airlines", departure: "2024-12-07 08:00:00", arrival: "2024-12-07 15:00:00", from: "Sydney Kingsford Smith", to: "Charles de Gaulle" },
    "F008": { airline: "JetBlue", departure: "2024-12-08 10:00:00", arrival: "2024-12-08 20:00:00", from: "Dubai International", to: "Tokyo Narita" },
    "F009": { airline: "Turkish Airlines", departure: "2024-12-09 08:00:00", arrival: "2024-12-09 22:00:00", from: "Changi", to: "Heathrow" },
    "F010": { airline: "Air France", departure: "2024-12-10 22:00:00", arrival: "2024-12-11 04:00:00", from: "Los Angeles International", to: "John F. Kennedy International" }
};

document.getElementById('passengerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const passengerID = document.getElementById('passengerID').value.trim();

    const passenger = passengersData[passengerID];
    if (passenger) {
        const flightID = passenger.flight;
        const flight = flightsData[flightID];

        const flightDetails = `
            <h2>Flight Information</h2>
            <p><strong>Passenger:</strong> ${passenger.name}</p>
            <p><strong>Airline:</strong> ${flight.airline}</p>
            <p><strong>From:</strong> ${flight.from}</p>
            <p><strong>To:</strong> ${flight.to}</p>
            <p><strong>Departure Time:</strong> ${flight.departure}</p>
            <p><strong>Arrival Time:</strong> ${flight.arrival}</p>
        `;
        document.getElementById('flightInfo').innerHTML = flightDetails;
    } else {
        document.getElementById('flightInfo').innerHTML = `<p class="error">Passenger ID not found!</p>`;
    }

    document.getElementById('passengerForm').reset();
});

