#  PUBG Match Win Predictor

##  About the Project
Welcome to the **PUBG Match Win Predictor**! This project is a statistical web application designed for our Probability & Statistics course. It calculates a player's probability of winning a battle royale match (getting that *Winner Winner Chicken Dinner!*) based on their in-game statistics. 

The prediction engine is powered by a **Logistic Regression** model trained on a real PUBG dataset (from Kaggle). By using real-world data, the calculated probabilities reflect realistic, highly competitive gameplay scenarios.

##  Key Features
* **Live Probability Calculation:** Adjust in-game stats—including Kills, Heals, Boosts, Walk Distance, Damage Dealt, and **Match Duration**—using interactive sliders to see real-time win probabilities.
* **Authentic Desert Theme:** A Miramar-inspired, responsive user interface that gives a realistic gaming feel with transparent UI elements and glowing accents.
* **Statistical Backing:** Uses real-world coefficients, weights, and intercept values derived directly from our trained Logistic Regression model.

##  Tech Stack & Architecture
* **Frontend UI:** HTML5, CSS3 (Custom Miramar Desert Theme)
* **Statistical Logic:** JavaScript (Sigmoid function implementation & Log-Odds calculation)
* **Model Training:** Python, Pandas, Scikit-learn (Logistic Regression)

## Statistical Concepts Applied
This project practically implements several key concepts from Probability & Statistics:
* **Probability & Bounds:** Using the Sigmoid function to bound the continuous output between 0 and 1 (0% to 100%).
* **Logistic Regression:** Generating a linear equation (Logit) based on weighted features.
* **Random Variables:** Differentiating between discrete random variables (e.g., Kills, Heals) and continuous random variables (e.g., Match Duration, Walk Distance).
* **Data Distribution & Variance:** Handling the high kurtosis, positive skewness, and class imbalance inherently found in competitive gaming data.

##  Team Members
* Nimra Tariq Avesi
* Banin Fatima
* Mahnoor

---
*Developed as a semester project for Probability and Statistics.*
