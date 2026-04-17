// Set target date (April 25, 2026 at 7 PM)
const targetDate = new Date("April 25, 2026 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    // Check if the event has passed
    if (diff < 0) {
        document.getElementById('timer').innerHTML = "<h3 style='grid-column: span 4; color: #ff007f;'>IT'S PARTY TIME! 🥳</h3>";
        return;
    }

    // Time calculations
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('mins').innerText = m.toString().padStart(2, '0');
    document.getElementById('secs').innerText = s.toString().padStart(2, '0');
}

// Refresh timer every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// RSVP Button Interaction
document.getElementById('rsvpBtn').addEventListener('click', function() {
    // Trigger Confetti
    confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f3ff', '#ff007f', '#ffffff']
    });

    // Update Button Text
    this.innerText = "SEE YOU THERE! ✅";
    this.style.borderColor = "#00f3ff";
    this.style.color = "#00f3ff";
});
