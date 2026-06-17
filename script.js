// Real-Time System Clock (Kriteria 8)
function initializeSystemMetrics() {
    const clockElement = document.getElementById('clock-display');
    if (clockElement) {
        const currentTimestamp = new Date();
        const timeFormatted = currentTimestamp.toLocaleTimeString();
        const dateFormatted = currentTimestamp.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        
        clockElement.innerHTML = `⚙️ <b>System Status:</b> Live & Secure | <b>${dateFormatted} — ${timeFormatted}</b>`;
    }
}

// Trigger interval refresh loops every second
setInterval(initializeSystemMetrics, 1000);

document.addEventListener("DOMContentLoaded", function() {
    console.log("Aesthetic Asset Framework Loaded Successfully.");
});