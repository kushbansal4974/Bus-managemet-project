const buses = [
    {
        id: 1,
        name: "Bus 101",
        from: "Kashmere Gate",
        to: "Noida Sector 18",
        arrivalTime: "06:00 AM",
        departureTime: "06:30 AM"
    },
    {
    id: 1,
        name: "Delhi Bus ",
        from: "Kashmere Gate",
        to: "Noida Sector 18",
        arrivalTime: "08:00 AM",
        departureTime: "08:30 AM"
    },
    {
        id: 2,
        name: "Bus 102",
        from: "ISBT Kashmiri Gate",
        to: "Gurgaon DLF Cyber Hub",
        arrivalTime: "07:00 AM",
        departureTime: "07:30 AM"
    },
    {
        id: 3,
        name: "Bus 103",
        from: "Anand Vihar",
        to: "Vaishali",
        arrivalTime: "08:00 AM",
        departureTime: "08:30 AM"
    },
    // Add more bus data here
];

// Function to display bus list
function displayBusList(from, to) {
    let busListHTML = ""; // Changed 'const' to 'let'
    buses.forEach((bus) => {
        if (bus.from === from && bus.to === to) {
            busListHTML += `
                <table>
                    <tr>
                        <th>Bus Name</th>
                        <td>${bus.name}</td> <!-- Corrected from 'Bus.Name' to 'bus.name' -->
                    </tr>
                    <tr>
                        <th>From</th>
                        <td>${bus.from}</td>
                    </tr>
                    <tr>
                        <th>To</th>
                        <td>${bus.to}</td>
                    </tr>
                    <tr>
                        <th>Arrival Time</th>
                        <td>${bus.arrivalTime}</td>
                    </tr>
                    <tr>
                        <th>Departure Time</th>
                        <td>${bus.departureTime}</td>
                    </tr>
                </table>
            `;
        }
    });
    document.getElementById("bus-list").innerHTML = busListHTML;
}

// Add event listener to the form
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    displayBusList(from, to);
});