# PUBG Match Win Predictor

A data-driven web application designed to predict the probability of a player reaching the Top 10% (win) in PUBG Mobile matches based on in-game performance metrics. This project was developed as part of a Probability and Statistics coursework.

##  Live Demo
Access the live predictor here: [https://nimra25-tech.github.io/Pubg-Win-Predictor/](https://nimra25-tech.github.io/Pubg-Win-Predictor/)

##  Project Overview
This project bridges the gap between raw statistical modeling and interactive user experience. We utilized a Kaggle dataset containing 200,000+ match records to train a **Logistic Regression** model capable of calculating win probability based on six key gameplay variables.

### Key Features
- **Interactive UI**: A PUBG-themed dashboard featuring real-time sliders and a dynamic probability graph.
- **Statistical Modeling**: Utilizes Logistic Regression to weigh the importance of performance metrics.
- **Responsive Analytics**: Visualizes survival probability shifts using [Chart.js](https://www.chartjs.org/).

##  Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+).
- **Backend/Data Science**: Python, Pandas, Scikit-Learn.
- **Deployment**: GitHub Pages.
- **Visualization**: Chart.js.

## Model Performance
The model was evaluated on 40,000 test cases with the following results:
- **Accuracy**: 91.4%
- **ROC-AUC Score**: 0.911
- **Primary Predictors**: Boosts, Kills, and Damage Dealt.



##  The Squad
This project is a collaborative effort by:
- **Nimra**: Lead Developer (Deployment, Logic Integration & UI)
- **Banin**: UI/UX Designer (Frontend Design, Sliders & Interactive Elements)
- **Mahnoor**: Data Scientist (Dataset Analysis, Modeling & Statistical Verification)

## How to run locally
1. Clone the repository:
   ```bash
   git clone [https://github.com/nimra25-tech/Pubg-Win-Predictor.git](https://github.com/nimra25-tech/Pubg-Win-Predictor.git)
1. Clone the repository:
   ```bash
   git clone [https://github.com/nimra25-tech/Pubg-Win-Predictor.git](https://github.com/nimra25-tech/Pubg-Win-Predictor.git)
