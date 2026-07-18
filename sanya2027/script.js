// Sanya 2027 Wedding Page Interactive Scripts

// 1. Countdown Timer (Targeting Ceremony: January 2, 2027 at 16:16:00 UTC+8)
const TARGET_DATE_STRING = "2027-01-02T16:16:00+08:00"; 
const targetTime = new Date(TARGET_DATE_STRING).getTime();

function updateCountdown() {
    const now = Date.now();
    const difference = targetTime - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (difference <= 0) {
        // Event has started or passed
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format display numbers with leading zeros
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Run countdown update immediately and set interval for every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// 2. Day Switcher for Wedding Itinerary
function switchDay(dayNum) {
    // Get all tab buttons and timeline containers
    const tabButtons = document.querySelectorAll('.tab-btn');
    const timelines = document.querySelectorAll('.timeline-container');

    // Remove active class from all tabs and timelines
    tabButtons.forEach(btn => btn.classList.remove('active'));
    timelines.forEach(timeline => timeline.classList.remove('active'));

    // Activate the selected tab and timeline
    const activeTab = document.getElementById(`tab-day${dayNum}`);
    const activeTimeline = document.getElementById(`timeline-day${dayNum}`);

    if (activeTab && activeTimeline) {
        activeTab.classList.add('active');
        activeTimeline.classList.add('active');
    }
}

// Expose switchDay globally
window.switchDay = switchDay;
