// Target: Jan 5, 2027, 23:00:00 Manila Time (UTC+8)
const targetDate = new Date('2026-05-01T23:00:00+08:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = "<p class='text-xl'>Event Started</p>";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}