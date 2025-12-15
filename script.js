// Mock function for connecting wallet
function connectWallet() {
    alert("Connecting to wallet...");
    // In a real app, this would use Web3 libraries
}

// Function to fetch live prices from backend API
async function fetchPrices() {
    try {
        // Assume backend is running on http://localhost:3000
        const response = await fetch('http://localhost:3000/api/prices');
        const prices = await response.json();
        const container = document.getElementById('price-container');
        container.innerHTML = JSON.stringify(prices, null, 2);
    } catch (error) {
        console.error("Error fetching prices:", error);
        document.getElementById('price-container').innerHTML = "Failed to load prices.";
    }
}

// Check if user is admin (simple mock for frontend logic)
function checkAdminStatus() {
    // In a real app, check a JWT token for admin role
    const isAdmin = localStorage.getItem('userRole') === 'admin'; 
    if (isAdmin) {
        document.getElementById('admin-link').style.display = 'inline';
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', (event) => {
    fetchPrices();
    checkAdminStatus();
});
