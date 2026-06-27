// Kaggle ke real model se nikle naye coefficients (with matchDuration)
const coeffs = {
    kills: 0.09173097829743049,
    damageDealt: 0.0012971819446032475,
    walkDistance: 0.001033049913974396,
    heals: -0.015655623455704336,
    boosts: 0.33082054809719597,
    matchDuration: -0.0012862147037662407
};

// Kaggle ke real model ka exact bias (intercept)
const bias = -3.1057202039696135;

// Sliders ki value HTML screen par live update karne ke liye function
function updateVal(id, val) {
    document.getElementById(id).innerText = val;
}

// Win Probability calculate karne ka main statistical function
function predict() {
    // 1. HTML sliders se values read karna
    const kills = parseFloat(document.getElementById('kills').value);
    const dmg = parseFloat(document.getElementById('dmg').value);
    const walk = parseFloat(document.getElementById('walk').value);
    const heals = parseFloat(document.getElementById('heals').value);
    const boosts = parseFloat(document.getElementById('boosts').value);
    const duration = parseFloat(document.getElementById('duration').value);

    // 2. Logistic Regression Equation (z = bias + w1*x1 + w2*x2 + ...)
    let z = bias + 
            (coeffs.kills * kills) + 
            (coeffs.damageDealt * dmg) + 
            (coeffs.walkDistance * walk) + 
            (coeffs.heals * heals) + 
            (coeffs.boosts * boosts) +
            (coeffs.matchDuration * duration);

    // 3. Sigmoid Function apply karna probability [0, 1] nikalne ke liye
    let probability = 1 / (1 + Math.exp(-z));
    let percent = (probability * 100).toFixed(2);

    // 4. Result ko styling aur colors ke saath display karna
    let resultDiv = document.getElementById('result');
    
    if (percent > 60) {
        resultDiv.style.color = "#00FF00"; // Green color for high chances
        resultDiv.innerHTML = `Win Probability: ${percent}% <br><br>🏆 WINNER WINNER CHICKEN DINNER!`;
    } else if (percent > 30) {
        resultDiv.style.color = "#FFA500"; // Orange color for average chances
        resultDiv.innerHTML = `Win Probability: ${percent}% <br><br>Top 10 is highly possible.`;
    } else {
        resultDiv.style.color = "#FF3333"; // Red color for low chances
        resultDiv.innerHTML = `Win Probability: ${percent}% <br><br>Better luck next time.`;
    }
}