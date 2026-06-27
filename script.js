
const INTERCEPT = -3.1057; 
const W_KILLS = 0.0917;
const W_DMG = 0.0013;
const W_WALK = 0.0010;
const W_HEALS = -0.0157; // Note: Heals have a negative impact in this specific model
const W_BOOSTS = 0.3308;
const W_DURATION = -0.0013; // Note: Duration has a slight negative impact
// ==========================================

const ctx = document.getElementById('probabilityChart').getContext('2d');
const finalProbText = document.getElementById('final-prob');

// Initialize the PUBG Themed Chart
let pubgChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Early Game', 'Mid Game', 'Late Game', 'Final Circle', 'Chicken Dinner'],
        datasets: [{
            label: 'Survival Probability (%)',
            data: [0, 0, 0, 0, 0], 
            borderColor: '#F2A900', 
            backgroundColor: 'rgba(242, 169, 0, 0.15)', 
            pointBackgroundColor: '#fff',
            pointBorderColor: '#F2A900',
            pointRadius: 5,
            fill: true,
            tension: 0.3 
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#E0E0E0', font: { family: 'Teko', size: 20 } } } },
        scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#A0A0A0', font: { family: 'Teko', size: 16 } } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#A0A0A0', font: { family: 'Teko', size: 16 } }, suggestedMin: 0, suggestedMax: 100 }
        }
    }
});

// Grab all DOM Elements
const sliders = {
    kills: document.getElementById('kills'),
    dmg: document.getElementById('dmg'),
    walk: document.getElementById('walk'),
    heals: document.getElementById('heals'),
    boosts: document.getElementById('boosts'),
    duration: document.getElementById('duration')
};

// Main Probability Calculation Function
function updatePrediction() {
    // 1. Get current values from sliders
    let vals = {
        kills: parseFloat(sliders.kills.value),
        dmg: parseFloat(sliders.dmg.value),
        walk: parseFloat(sliders.walk.value),
        heals: parseFloat(sliders.heals.value),
        boosts: parseFloat(sliders.boosts.value),
        duration: parseFloat(sliders.duration.value)
    };

    // Update text labels
    document.getElementById('kills-val').innerText = vals.kills;
    document.getElementById('dmg-val').innerText = vals.dmg;
    document.getElementById('walk-val').innerText = vals.walk;
    document.getElementById('heals-val').innerText = vals.heals;
    document.getElementById('boosts-val').innerText = vals.boosts;
    document.getElementById('duration-val').innerText = vals.duration;

    // 2. Logistic Regression Formula (z = mx + b)
    let z = INTERCEPT 
          + (vals.kills * W_KILLS) 
          + (vals.dmg * W_DMG) 
          + (vals.walk * W_WALK) 
          + (vals.heals * W_HEALS) 
          + (vals.boosts * W_BOOSTS) 
          + (vals.duration * W_DURATION);

    // 3. Sigmoid Function: P = 1 / (1 + e^-z)
    let probability = 1 / (1 + Math.exp(-z));
    let percentage = (probability * 100).toFixed(1); // Convert to %

    // Update Header Text
    finalProbText.innerText = percentage + "%";

    // 4. Create a nice curve for the graph leading up to the final probability
    let finalP = parseFloat(percentage);
    let curveData = [
        finalP * 0.1, // Early Game
        finalP * 0.3, // Mid Game
        finalP * 0.6, // Late Game
        finalP * 0.85, // Final Circle
        finalP        // Chicken Dinner (Final Prediction)
    ];

    pubgChart.data.datasets[0].data = curveData;
    pubgChart.update();
}

// Add event listeners to all sliders
Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', updatePrediction);
});

// Run once on load to set initial state
updatePrediction();
